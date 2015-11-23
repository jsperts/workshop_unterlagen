(function() {
  'use strict';

  // Object als Funktion nutzen
  var numberObject = Object(1);
  console.log(typeof zahl); // 'object'

  var stringObject = Object('a'); // 'object'

  var object = Object(); // --> Eine Instanz von Object
  // Äquivalent zu
  var object1 = {}; // Besser das nutzen

  /*
   * Überprüfen, ob das Objekt eine bestimmte Eigenschaft besitzt
   */

  var aObject = {
    a: 'abc',
    b: 23
  };

  // Mit .hasOwnProperty --> sucht nur in der Instanz
  console.log('hasOwnProperty("a")', aObject.hasOwnProperty('a')); // true
  console.log('hasOwnProperty("hasOwnProperty")', aObject.hasOwnProperty('hasOwnProperty')); // false

  // Mit "in" --> sucht auch in "super-Objekte"
  console.log('"a" in aObject', 'a' in aObject); // true
  console.log('"hasOwnProperty" in aObject', 'hasOwnProperty' in aObject); // true

  /*
   * Alle Keys eines Objekts lesen
   */

  // Achtung: Die Reihenfolge ist nicht garantiert
  // Object.keys sucht nur in der Instanz
  console.log('Keys:', Object.keys(aObject)); // ['a', 'b']
})();

