const app = require("./app");

const express = require("express");
const cors = require("cors");

// const app = express();
const port = 3000; // You can use any port you prefer

// Middleware for CORS
app.use(cors());

// Homepage route
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
