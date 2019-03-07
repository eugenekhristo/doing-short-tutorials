const fs = require('fs');
const http = require('http');

const myServer = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const readStream = fs.createReadStream(__dirname + '/index.html');
  readStream.pipe(res);
});

myServer.listen(3000, '192.168.0.100');
