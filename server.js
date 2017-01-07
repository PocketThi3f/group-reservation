// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Table Reservations (DATA)
// =============================================================
var reservations = [{
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}, {
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}, {
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}, {
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}, {
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}, {
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Search for Specific Character (or all characters) - provides json
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", function(req, res) {
  var firstFive = reservations.slice(0, 5);
  res.json(firstFive);
});

app.get("/api/waitlist", function(req, res) {
  var waitlist = reservations.slice(5);
  res.json(waitlist);
});

// Create New Characters - takes in json input
app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  // validate data
  reservations.push(newReservation);
  var message;
  if (reservations.length < 5){
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
