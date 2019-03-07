const fs = require('fs');
const http = require('http');

const readStream = fs.createReadStream(__dirname + '/readMe.txt');
const writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

readStream.on('data', chunk => {
  console.log('Chunk recieved: ');
  writeStream.write(chunk);
});
