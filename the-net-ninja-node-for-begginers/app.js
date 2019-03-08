require('colors');
const express = require('express');

const app = express();
// say to express that we are going to use EJS as template engine
// so it will go look at views folder automatically
app.set('view engine', 'ejs');

// send static HTML
app.get('/', (req, res) => {
  res.status(200).sendFile(`${__dirname}/index.html`);
});

app.get('/contacts', (req, res) => {
  res.status(200).sendFile(`${__dirname}/contacts.html`);
});

// send DYNAMIC HTML (ejs)
app.get('/profile/:name', (req, res) => {
  const { name } = req.params;
  const person = {
    name,
    age: 26,
    city: 'Minsk',
    hobbies: ['eating 🍕', 'fighting  🐱‍👓', 'fishing  🐟']
  };
  res.render('profile', { person });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`NodeJS server is running on the port ${PORT}...`.bgCyan)
);
