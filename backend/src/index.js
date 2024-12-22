// Purpose of index.js is for first point of entry and to initiate the server
// Get the port 
// Tell server to listen to web traffic 

// Server is configured in this file, not the indeax.js 
const {app} = require("./server.js"); 
const cors = require("cors"); //Import the CORS middleware


app.use(
    cors({
      origin: "http://localhost:5173", // Allow only frontend's origin
      methods: ["GET"], // Allow only the necessary HTTP methods
      allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers

    })
  );
  


// Get the PORT value from environment variables 
const PORT = process.env.PORT || 5100;

// app.listen()
app.listen(PORT, () => {
    // Server is running if we reach this point
    console.log("Server is running on port " + PORT);
});