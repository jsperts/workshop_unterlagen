(function() {
  'use strict';

  // Array definieren
  var arr1 = Array(1,2,3);
  console.log(arr1);

  // Besser mit Arrayliteral
  var arr2 = [1,2,3];

  console.log(arr2[0]); // 1

  console.log(arr2.length); // 3

  console.log(arr2[3]); // undefined

  /*
   * Array-Länge ist dynamisch
   */
  arr2[3] = 4;
  console.log(arr2[3]); // 4
  console.log(arr2.length); // 4

  // Achtung: Array ist ein Objekt
  console.log(typeof []); // 'object'

  /*
   * Arrays sind nicht Typgebunden
   */
  var manyTypes = ['a', 1, true];
  console.log('manyTypes', manyTypes);

  /*
   * Überprüfen, ob ein Wert ein Array is
   */
  var meinArray = [];
  var meinObjekt = {};

  console.log(Array.isArray(meinArray)); // true
  console.log(Array.isArray(meinObjekt)); // false

  /*
   * For-Schleife
   */
  var langs = ['english', 'german', 'italian', 'greek', 'french'];

  for (var i = 0; i < langs.length; i++) {
    console.log('Current lang is:', langs[i]);
  }
  // Achtung: die Variable i ist nach der for-Schleife weiterhin definiert
  console.log('Var i:', i);

  langs.forEach(function(lang) {
    console.log('Current lang is:', lang);
  });

  /*
   * Arrays sortieren
   */
  var lettersArray = 'agwertdcys'.split('');

  lettersArray.sort(function(a, b) {
    if (a < b) {
      return -1; // a kommt vor b in dem Array
    }
    if (a > b) {
      return 1; // a kommt nach b in dem Array
    }

    return 0; // a und b sind gleich
  });

  var lettersString = lettersArray.join('');
  console.log(lettersString);

  // Arrays Klonen
  var mainArray = [1,2,3,4];
  var clone = mainArray;

  clone[3] = 5;

  console.log('clone[3] =', clone[3]); // 5
  console.log('mainArray[3] =', mainArray[3]); // 5

  // Achtung: slice klont verschachtelte Arrays/Objekte nicht!
  var actualClone = mainArray.slice(0);

  actualClone[3] = 'a';

  console.log('actualClone[3] =', actualClone[3]); // 'a'
  console.log('mainArray[3] =', mainArray[3]); // 5
})();

