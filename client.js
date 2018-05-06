const net = require('net');

const sock = net.createConnection(3000);
process.stdin.pipe(sock);
sock.pipe(process.stdout);