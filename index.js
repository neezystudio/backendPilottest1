const mongoose = require("mongoose");
const express = require("express");
const routes = require('./routes/routes'); //
// const app = require('./app');

const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(cors());
// Use bodyParser middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);  // You can specify a different base path if needed

const dbURI =
  "mongodb+srv://victorneez6:123Mruc%21%40%23@cluster0.akev7kv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Bind connection to open event (to get notification of successful connection)
db.once("open", () => {
  console.log("Connected to MongoDB database");
  app.get("/", (req, res) => {
    res.send("Welcome to the homepage!");
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

// Close the Mongoose connection when the Node.js app is terminated
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
