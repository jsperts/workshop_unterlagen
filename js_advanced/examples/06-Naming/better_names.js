'use strict';

var personCounter = 0;

class Person {
  constructor(name, birthDate, hairColor) {
    this.id = personCounter + 1;
    this.name = name;
    this.birthDate = birthDate;
    this.hairColor = hairColor;
  }
}

class Humanity {
  constructor() {
    this.humanity = [];
  }

  add(person) {
    this.humanity.push(person);
  }

  update(person) {
    var numberOfPersons = this.humanity.length;
    for (var i = 0; i < numberOfPersons; i++) {
      // Der Kontext hilft zu verstehen was "currentPerson" ist
      var currentPerson = this.humanity[i];
      if (person.id === currentPerson.id) {
        this.humanity[i] = person;
        break;
      }
    }
  }

  get(id) {
    return this.humanity.find((person) => person.id === id);
  }
}
