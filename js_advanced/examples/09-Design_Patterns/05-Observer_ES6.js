// Beispielimplementierung, es gibt auch andere möglichkeiten
// Implementierung mit ES6 Klassen
(function() {
  'use strict';

  // Basis Klasse für alle Observables
  class Observable {
    constructor() {
      this._listeners = [];
    }
    observe(cb) {
      this._listeners.push(cb);
    }
    notify(data) {
      this._listeners.forEach(function(listener) {
        listener(data);
      });
    }
  }

  /* Observable: start */
  class Person extends Observable {
    constructor(name) {
      super();
      this.name = name;
    }
    changeName(newName) {
      this.name = newName;
      this.notify(newName);
    }
  }
  /* Observable: end */

  /* Observer: start */
  class Registry {
    constructor() {
      this.names = [];
    }
    observePerson(name) {
      console.log('New name', name);
      this.names.push(name);
    }
  }
  /* Observer: end */

  // Nutzung
  var person = new Person('John');
  var registry = new Registry();

  person.observe(registry.observePerson.bind(registry));
  person.changeName('Jack');
  person.changeName('Black');
})();
