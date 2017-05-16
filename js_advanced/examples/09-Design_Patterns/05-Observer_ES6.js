// Beispielimplementierung, es gibt auch andere Möglichkeiten
// Implementierung mit ES6 Klassen
(function () {
  'use strict';

  // Basis Klasse für alle Observables
  class Observable {
    constructor() {
      this.listeners = [];
    }
    observe(cb) {
      this.listeners.push(cb);
    }
    notify(data) {
      this.listeners.forEach(function (listener) {
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
