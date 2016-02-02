(function() {
  'use strict';

  function Person(firstName, lastName) {
    // Daten im Objekt
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.print = function() {
    console.log('Name:', this.firstName, this.lastName, 'Hair color:', this.hairColor);
  };

  var person = new Person('John', 'Doe');
  // Zustandsveränderung
  person.hairColor = 'brown';
  person.print();
})();