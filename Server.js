const http = require('http');
const express = require('express');
const app = express();
const get;
app.use(express.static('public'));
const fs = require('fs');
const server = http.createServer(function(req, res) {
    fs.readFile(__dirname + '/client.html', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, { 'Context-type': 'text/plain' });
            res.end(data);
        };
    });
});
server.listen(8080, function() {
    console.log('ok 8080');
});
const io = require('socket.io')(server);
io.on('connection', function(socket) {
    socket.emit('news', { wwe: 'wwe' });
    socket.on('mymes', function(data) {
        console.log(data);
    })
});