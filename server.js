const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

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

// io.on('connection', function(socket){
//   console.log('a user connected');
// });
// var GlobalDeviceID = 0;
// // handle incoming connections from clients
// io.sockets.on('connection', function(socket) {
//     console.log ("connect from socket", socket)
//     // once a client has connected, we expect to get a ping from them saying what room they want to join
//     socket.on('device', function(DeviceID) {
//         console.log ("message from device "+ DeviceID);
//         GlobalDeviceID = DeviceID;
//         socket.join(DeviceID);

//         console.log ("Message back to DeviceID: "+DeviceID);
//         io.sockets.emit(DeviceID, "io.sockets.emit(DeviceID): "+DeviceID);
//     });
// });

// Start the server
app.listen(PORT, function() {
  console.log ("\n\n\n\n\n\n\n**************************************\n")
  console.log(`🌎  ==> KennelBuddy Server now listening on PORT ${PORT}!`);
});
