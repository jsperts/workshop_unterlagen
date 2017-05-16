(function () {
  'use strict';

  class Person {
    constructor(firstName, lastName) {
      // Daten im Objekt
      this.firstName = firstName;
      this.lastName = lastName;
    }

    print() {
      console.log('Name:', this.firstName, this.lastName, 'Hair color:', this.hairColor);
    }
  }

  var person = new Person('John', 'Doe');
  // Zustandsveränderung
  person.hairColor = 'brown';
  person.print();
})();
