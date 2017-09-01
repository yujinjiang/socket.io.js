var io = require('socket.io')(80);
var get = 'test';
io.on('connection', (socket) => {
    console.log('ok connection ');
    console.log(socket.id);
    socket.write(123);
    socket.on('private message', (data) => {
        console.log(data, `private`);
    });
    socket.on('disconnect', () => {
        console.log('out here');
    });
    socket.on('message', (data) => {
        console.log(`${data}`, 'message');
    });
    socket.emit('socket connection', `${socket.id}`);
    io.sockets.emit('socket connection', `data`);
});
