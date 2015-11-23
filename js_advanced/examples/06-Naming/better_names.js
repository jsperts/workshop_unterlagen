'use strict';

var personCounter = 0;

function Person (name, birthDate, hairColor) {
  this.id = personCounter + 1;
  this.name = name;
  this.birthDate = birthDate;
  this.hairColor = hairColor;
}

function Humanity() {
  this.humanity = [];
}

Humanity.prototype.add = function(person) {
  this.humanity.push(person);
};

Humanity.prototype.update = function(person) {
  var numberOfPersons = this.humanity.length;
  for(var i = 0; i < numberOfPersons; i++) {
    // Der Kontext hilft zu verstehen was "currentPerson" ist
    var currentPerson = this.humanity[i];
    if (person.id === currentPerson.id) {
      this.humanity[i] = person;
      break;
    }
  }
};

Humanity.prototype.get = function(id) {
  return this.humanity.filter(function(person) {
    return person.id === id;
  })[0];
};

