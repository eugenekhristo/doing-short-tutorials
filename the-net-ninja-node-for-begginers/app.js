require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
// say to express that we are going to use EJS as template engine
// so it will go look at views folder automatically
app.set('view engine', 'ejs');
// if requrest starts with /assets - it means express will send static files
// from assets folder (fiolder can be named whatever)
app.use('/assets', express.static('assets'));


// send static HTML
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contacts', (req, res) => {
  res.render('contacts');
});

app.post('/quotes', urlencodedParser, (req, res) => {
  const {title, content} = req.body;
  res.render('quote', {title, content});
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
