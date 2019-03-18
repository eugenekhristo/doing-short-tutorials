const express = require('express');

const app = express();
app.use('/assets', express.static('assets'));


app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use((req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('LISTENING on the port 3000'));