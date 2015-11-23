(function() {
  'use strict';

  /*
   * Eigene Objekte und Vererbung
   */
  // Best practice Konstruktor mit Großbuchstabe
  function Pet(name, color) {
    this.name = name;
    this.color = color;
    // Implizite return-Wert: this
  }

  // Default Prototyp: Object.prototype
  // Prototyp wird erweitert
  Pet.prototype.getName = function() {
    return this.name;
  };
  Pet.prototype.getColor = function() {
    return this.color;
  };
  // Achtung: "new" macht aus einer Funktion ein Konstruktor, ohne "new" -> Exception
  var pet = new Pet('I am a pet', 'red');

  function Dog(name, color) {
    Pet.call(this, name, color); // call 'super' constructor
  }

  // Dog ist eine Subklasse von Pet
  Dog.prototype = Object.create(Pet.prototype);

  // Prototyp wird erweitert
  Dog.prototype.getName = function() {
    var name = Pet.prototype.getName.call(this); // 'super' call
    return 'I am: ' + name;
  };

  var skip = new Dog('skip', 'black');

  /*
   * Check, ob Prototypen und Instanzen korrekt sind
   */
  console.log('skip instanceof Dog', skip instanceof Dog); // true
  console.log('skip instanceof Pet', skip instanceof Pet); // true
  console.log('skip instanceof Object', skip instanceof Object); // true

  console.log('pet instanceof Dog', pet instanceof Dog); // false
  console.log('pet instanceof Pet', pet instanceof Pet); // true
  console.log('pet instanceof Object', pet instanceof Object); // true

  Dog.prototype.isPrototypeOf(skip); // true, equivalent zu "skip instanceof Dog"
  Object.prototype.isPrototypeOf(skip); // true

  pet.getName(); // 'I am a pet'
  skip.getName(); // 'I am: skip'
  skip.getColor(); // 'black'

  /*
   * Alle Keys eines Objekts lesen + Eigenschaften im Prototyp des Objekts
   */
  // Achtung: Die Reihenfolge ist nicht garantiert
  var keysArray = [];
  for (var key in skip) {
    keysArray.push(key);
  }
  console.log('keys', keysArray); // ['name', 'color', 'getName', 'getColor']

  Object.keys(skip);
  // Äquivalent zu
  var ownKeysArray = [];
  for (var key2 in skip) {
    if (skip.hasOwnProperty(key2)) {
      ownKeysArray.push(key2);
    }
  }
  console.log('ownKeys', ownKeysArray);

  /*
   * Built-in Prototypen erweitern
   */
  Array.prototype.getFirst = function() {
    return this[0];
  };
  var arr = ['1'];
  arr.getFirst(); // '1'

  // Erst checken, ob funktion definiert, dann erweitern
  Array.prototype.toString = Array.prototype.toString || function() {};
})();

