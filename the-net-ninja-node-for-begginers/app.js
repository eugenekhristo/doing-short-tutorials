const fs = require('fs');
const http = require('http');

const readStream = fs.createReadStream(__dirname + '/readMe.txt');

const myServer = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  readStream.pipe(res);
});

myServer.listen(3000, '192.168.0.100');
