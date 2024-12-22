require("dotenv").config(); // Load environment variables

const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import CORS middleware

const app = express(); // Initialize the Express app
app.use(express.json()); // Middleware to parse JSON requests

// Configure CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST"], // Allow these HTTP methods
    credentials: true, // Allow credentials if needed
  })
);

// Environment variables for Spotify credentials
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
let accessToken = "";

// Function to Get Access Token from Spotify
const getAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    accessToken = response.data.access_token;
    console.log("Access token refreshed");
  } catch (error) {
    console.error("Failed to get access token:", error);
  }
};

// Middleware to refresh token if missing
app.use(async (req, res, next) => {
  if (!accessToken) {
    await getAccessToken();
  }
  next();
});

// Test route to confirm environment variables
app.get("/test-env", (req, res) => {
  res.json({
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  });
});

// Spotify Search API Route
app.get("/api/music/search", async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=artist&q=${query}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    // Extract essential information
    const artists = response.data.artists.items.map((artist) => ({
      name: artist.name,
      genres: artist.genres,
      profileUrl: artist.external_urls.spotify,
      image: artist.images[0]?.url, // Check if images exist
    }));
    res.json(artists); // Send back the formatted data
  } catch (error) {
    console.error("Error fetching data from Spotify:", error);
    res.status(500).json({ error: "Failed to fetch data from Spotify" });
  }
});

module.exports = { app };