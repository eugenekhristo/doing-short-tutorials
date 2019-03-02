const fs = require('fs');
const events = require('events');

class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const serj = new Person('Serj');
const millie = new Person('Millie');

const people = [serj, millie];

people.forEach(person => {
  person.on('speak', e => console.log(`${e.name} said: ${e.message}!`))
})

serj.emit('speak', {
  message: 'Imperfect harmonies',
  name: serj.name
})

serj.emit('speak', {
  message: 'Strangest things',
  name: millie.name
})