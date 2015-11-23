(function() { // Don't use strict here
  /*
   * this bei Funktionsaufruf
   */
  function bar() {
    console.log(typeof this); // 'object' (das globale Objekt, window im Browser)
  }
  bar();

  // strict mode
  function baz() {
    'use strict';
    console.log(typeof this); // 'undefined'
  }
  baz();

  /*
   * this bei Konstruktoraufruf
   */
  function Constr() {
    console.log(typeof this); // 'object'
  }
  new Constr();

  /*
   * this bei Methodenaufruf
   */
  var obj = {
    name: 'Blabla',
    getName: function() {
      return this.name;
    },
    getNameStrict: function() {
      'use strict';
      return this.name;
    },
    getNameWithPrefix: function(pref1, pref2) {
      return pref1 + pref2 + this.name;
    }
  };

  console.log(obj.getName()); // 'Blabla', this ist das Objekt obj

  var getName = obj.getName; // getName referenziert obj.getName
  var getNameStrict = obj.getNameStrict;

  console.log(getName()); // undefined, "name" ist undefined, da this das globale Objekt

  try {
    console.log(getNameStrict());
  } catch (e) {
    console.log(e);
  }

  /*
   * this selbst definieren
   */
  console.log(getName.call(obj)); // 'Blabla', erste Parameter von call definiert das this. Hier ist this das Objekt obj
  console.log(getName.apply(obj)); // 'Blabla', erste Parameter von apply definiert das this. Hier ist this das Objekt obj

  // Alternativ
  getName = obj.getName.bind(obj); // Binde das Objekt obj als das this von der Funktion getName
  console.log(getName()); // 'Blabla'

  /*
   * call, apply, bind mit weiter Argumente
   */
  var getNameWithPrefix = obj.getNameWithPrefix;

  var pref1 = 'Hello';
  var pref2 = ', ';
  console.log(getNameWithPrefix.call(obj, pref1, pref2)); // 'Hello, Blabla'
  console.log(getNameWithPrefix.apply(obj, [pref1, pref2])); // 'Hello, Blabla'

  var getNameWithFirstPrefix = obj.getNameWithPrefix.bind(obj, pref1);
  console.log(getNameWithFirstPrefix(pref2)); // 'Hello, Blabla'

  var getNameWithBothPrefix = obj.getNameWithPrefix.bind(obj, pref1, pref2);
  console.log(getNameWithBothPrefix()); // 'Hello, Blabla'
})();

