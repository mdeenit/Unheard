// Purpose:
// Configure the server, eg. 
// - routes 
// - middleware 
// - CORS 
// - debug logger setups 
// - connections to databases 
// - connections to file storage 

const express = require("express"); 
const app = express(); 

// server app configuration here
// middleware, routes, etc 

// app.verb(path, callback); 
app.get("/", (request, response) => {
    response.send("Hello, world"); 
    
}); 

// Server app configuration is finished here 
// Export the app so that other files can control when the server starts and stops
module.exports = {
    app
}