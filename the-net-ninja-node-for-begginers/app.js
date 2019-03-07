const fs = require('fs');
const http = require('http');

const myServer = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  const person = {
    name: 'Eugene',
    age: 26
  };

  res.end(JSON.stringify(person)); 
});

myServer.listen(3000, '192.168.0.100');
