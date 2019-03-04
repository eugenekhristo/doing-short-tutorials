const fs = require('fs');

// remove file
// fs.unlinkSync('./writeToMe.txt');

// create and remove dir
// fs.mkdir('./stuff', err => {
//   setTimeout(() => fs.rmdirSync('./stuff'), 2000)
// })

fs.mkdir('./stuff', err => {
  fs.readFile('./readme.txt', 'utf8', (err ,data) => {
    fs.writeFile('./stuff/writeMe.txt', `${data} ✌😎`, () => {})
  })
})