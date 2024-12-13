// Purpose of index.js is for first point of entry and to initiate the server
// Get the port 
// Tell server to listen to web traffic 

// Server is configured in this file, not the indeax.js 
const {app} = require("./server.js"); 

// Get the PORT value from environment variables 
const PORT = process.env.PORT || 3000;

// app.listen()
app.listen(PORT, () => {
    // Server is running if we reach this point
    console.log("Server is running on port " + PORT);
});