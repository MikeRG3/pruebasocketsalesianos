var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
process.env.PORT = process.env.PORT || 3000;



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.set('port', process.env.PORT);

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});

http.listen(process.env.PORT, function() {
    console.log('listening on *:3000', process.env.PORT);
});