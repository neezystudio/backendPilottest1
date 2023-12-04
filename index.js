const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://victorneez6:<password>@cluster0.akev7kv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Bind connection to open event (to get notification of successful connection)
db.once("open", () => {
  console.log("Connected to MongoDB database");
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
