const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
console.log ("process.env.NOD_ENV is: " + process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kennelbuddy", {useNewUrlParser: true});

// Start the API server
app.listen(PORT, function() {
  console.log ("\n\n\n\n\n\n\n**************************************\n")
  console.log(`🌎  ==> KennelBuddy Server now listening on PORT ${PORT}!`);
});
