const net = require('net');
console.log(0)
net.createServer(socket=>{
console.log("new connection created")
    socket.on('data',chunk=>{
        console.log("chunk", chunk);
    }).
    on('end',()=>{socket.end()});
}).
listen(3000);

