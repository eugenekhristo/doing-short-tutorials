const fs = require('fs');

fs.readFile('./readme.txt', 'utf8', (err, data) => {
  fs.writeFile('writeToMe.txt', data + '!! 😍', err => {
    console.log('File is written!');
  });
});

console.log(`Me first`);