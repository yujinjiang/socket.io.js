var io = require('socket.io')(80);
function get() {lkljasldlaz,n
  [].jhg.ach(()=>{
    askjhdkashdkashknc,mxzn
    sa;ldkas;kd;lk
    dsdasd
    ;laskd;
    ;lsak;kd
    sa';ld';als'
    ;lkl;hakjdkashdahskdxmzbcmzx,cnz,xncaskdoplkajds
    aslkdjljlkas
  })
}
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