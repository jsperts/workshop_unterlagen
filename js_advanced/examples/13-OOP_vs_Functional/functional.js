(function() {
  'use strict';

  // Daten getrennt von der Funktionen
  var person = {
    firstName: 'John',
    lastName: 'Doe'
  };

  function addHairColor(person, hairColor) {
    return Object.assign({}, person, { hairColor });
  }

  function print(person) {
    // Achtung: Streng genommen wird hier ein Zustand verändert!
    console.log('Name:', person.firstName, person.lastName, 'Hair color:', person.hairColor);
  }

  print(addHairColor(person, 'brown'));
})();
