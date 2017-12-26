var app = require("express")();
var http = require('http').Server(app);
var io = require('socket.io')(http)

app.get('/', function(req, res) {
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/index.html');
});

// socket connection
// 
io.on('connection', function(socket) {
    console.log('a user connected');

    // 1. connect from client by 'var socket = io()' in the page
    socket.on('disconnect', function(socket) {
        console.log('a user disconnected');
    });

    // 2. emit message from client
    socket.on('chat message', function(msg) {
        console.log('message:' + msg);

        // 3. broadcasting, send message to everyone
        io.emit('chat message', msg);
    });

    // 4. broadcasting, send to the only socket
    // socket.broadcast.emit('hi');
})


http.listen(3000, function() {
    console.log('listening on *:3000');
});