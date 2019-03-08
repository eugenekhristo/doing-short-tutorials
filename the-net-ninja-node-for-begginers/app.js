const fs = require('fs');
const http = require('http');
const jsonData = require('./someData.json');

const myServer = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contacts') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/contacts.html').pipe(res);
  } else if (req.url === '/api/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonData));
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

myServer.listen(3000, '192.168.0.100');
