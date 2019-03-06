const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end('Hey Eugene! =)');
})


server.listen(3000, '192.168.0.100');
console.log('SERVER is started...');