// import the useful things
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Declare the port
const port = 3000;

// Test API Endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Using API Endpoint using Routing
app.use("/api", require("./Routes/test"));

// Listening the app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
