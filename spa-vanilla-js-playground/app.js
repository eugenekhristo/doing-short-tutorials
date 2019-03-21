const express = require('express');

const app = express();
app.use('/assets', express.static('assets'));

app.use('/index.js', (req, res) => {
  res.sendFile(__dirname + '/index.js');
});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use((req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('LISTENING on the port 3000'));