# Backend Progress

## Project Overview
The backend for this project has been developed using the following stack:
- **Node.js** with **Express.js** for server-side development
- **MongoDB** as the database
- **Mongoose** for database interaction and schema definition

The backend serves as the core of the application, handling API requests, interacting with the database, and providing endpoints for the frontend to consume.

---

## Accomplishments

### 1. **Server Setup**
- Successfully set up an Express.js server to handle HTTP requests.
- Configured middleware to parse incoming JSON requests using `express.json()`.
- Established modular design by separating routes into different files (e.g., `userRoutes.js`) for better code organization.

### 2. **Database Integration**
- Connected to a local MongoDB database named `unheard` using Mongoose.
- Implemented a connection logic with error handling to ensure the database connection is established.
- Prepared the environment for CRUD operations on user data.

### 3. **Basic API Development**
- Created basic API endpoints:
  - **GET /api/users**: Retrieves a list of users (currently using dummy data).
  - **POST /api/users**: Accepts new user data and stores it (dummy implementation).
- Modularized the routes into `userRoutes.js` and connected them to `server.js`.

### 4. **Testing**
- Set up and used Insomnia to test API endpoints.
- Verified API responses for successful requests and error cases.

---

## Challenges and Troubleshooting

### Challenge 1: **Initial Setup Issues**
- Encountered problems setting up the initial project structure, such as ensuring the routes file was properly connected to the server.
- **Solution**: Resolved by reviewing Express.js routing documentation and ensuring routes were imported and used in `server.js`.

### Challenge 2: **MongoDB Connection**
- Faced issues connecting to the MongoDB database, including syntax errors in the connection code.
- **Solution**: Corrected the Mongoose connection code and ensured MongoDB was running locally.
  ```javascript
  mongoose.connect("mongodb://localhost:27017/unheard", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  ```

### Challenge 3: **Testing with Insomnia**
- Experienced errors when testing API endpoints in Insomnia, such as `404 Not Found` or `Cannot GET /api/users`.
- **Solution**: Ensured the routes were correctly defined and matched the requested endpoints. Verified that the server was running on the correct port and base URL.

### Challenge 4: **Middleware Issues**
- JSON data from POST requests was not being parsed correctly.
- **Solution**: Added the `express.json()` middleware to handle JSON parsing.
  ```javascript
  app.use(express.json());
  ```

### Challenge 5: **Error Handling**
- Missing error handling for API requests caused debugging difficulties.
- **Solution**: Added error handling in routes to ensure meaningful responses for failures.
  ```javascript
  router.post("/", async (req, res) => {
      try {
          const newUser = new User(req.body);
          await newUser.save();
          res.status(201).json({ message: "User created", data: newUser });
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
  });
  ```

---

## Next Steps
- Replace dummy data in the API with real database queries using Mongoose.
- Implement full CRUD functionality for the `users` resource.
- Add comprehensive error handling for all endpoints.
- Integrate the backend with the React frontend.
- Write unit and integration tests for the backend.
- Deploy the backend to a cloud platform (e.g., Heroku, Render).

---

## Lessons Learned
- **Modularity is Key**: Separating routes and configurations into different files made the codebase easier to manage and debug.
- **Error Handling**: Proactively adding error handling ensures smoother debugging and improves the developer experience.
- **Tooling**: Using tools like Insomnia for API testing is essential for validating backend functionality during development.

---

## Github Links
https://github.com/mdeenit/Unheard-Frontend 
https://github.com/mdeenit/Unheard-Backend 