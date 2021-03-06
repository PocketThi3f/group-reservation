// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var data = require("./data");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
// =============================================================

// HTML ROUTES
// ===================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

// API ROUTES
// ===================================

app.get("/api/tables", function(req, res) {
  var firstFive = data.getReservation();
  res.json(firstFive);
});

app.get("/api/waitlist", function(req, res) {
  var waitlist = data.getWaitlist();
  res.json(waitlist);
});

app.get("/api/allData", function(req, res) {
  var allData = data.allData();
  res.json(allData);
});

// Create New Reservation - takes in json input
app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  // validate data
  var gotTable = data.addReservation(newReservation);
  var message;
  if (gotTable){
    message = "You got a table!";
  } else {
    message = "You are on the wait list.";
  }
  res.send(message);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
