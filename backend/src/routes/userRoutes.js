const express = require("express");
const router = express.Router();

// Route to get users
router.get("/", (req, res) => {
    res.json([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" }
    ]);
});

// Route to create a new user
router.post("/", (req, res) => {
    const newUser = req.body; // Get user data from the request body
    res.status(201).json({ message: "User created", data: newUser });
});

module.exports = router;
