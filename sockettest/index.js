var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//       console.log('user disconnected');
//     });
// });
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
  });

var GlobalDeviceID = 0;
// handle incoming connections from clients
io.sockets.on('connection', function(socket) {
    console.log ("connect from socket", socket)
    // once a client has connected, we expect to get a ping from them saying what room they want to join
    socket.on('device', function(DeviceID) {
        console.log ("message from device "+ DeviceID);
        GlobalDeviceID = DeviceID;
        socket.join(DeviceID);

        console.log ("Message back to DeviceID: "+DeviceID);
        io.sockets.in(DeviceID).emit('message', 'io.sockets.in(DeviceID) hello message '+DeviceID);
        io.sockets.in(DeviceID).emit(DeviceID, 'io.sockets.in(DeviceID) hello DeviceID '+DeviceID);
        io.sockets.emit('device', "From device: "+DeviceID);
        io.sockets.emit(DeviceID, "From DeviceID: "+DeviceID);

    });
});

// now, it's easy to send a message to just the clients in a given room

var DeviceID = GlobalDeviceID;
console.log ("Message back to DeviceID: "+DeviceID);
io.sockets.in(DeviceID).emit('message', 'hello device');
io.sockets.in(DeviceID).emit(DeviceID, 'hello device');
io.sockets.emit('device', "From device: "+DeviceID);
io.sockets.emit(DeviceID, "From DeviceID: "+DeviceID);

// this message will NOT go to the client defined above
io.sockets.in('foobar').emit('message', 'anyone in this room yet?');

http.listen(3000, function(){
  console.log('listening on *:3000');
});