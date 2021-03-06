// Beispielimplementierung, es gibt auch andere Möglichkeiten
// Implementierung für ES5, Prototypbasierend
(function () {
  'use strict';

  // Basisprototyp für alle Observables
  var observablePrototype = {
    observe: function (cb) {
      this._listeners.push(cb);
    },
    notify: function (data) {
      this._listeners.forEach(function (listener) {
        listener(data);
      });
    },
  };

  /* Observable: start */
  var personPrototype = Object.create(observablePrototype, {
    changeName: {
      writable: false,
      configurable: false,
      enumerable: false,
      value: function (newName) {
        this.name = newName;
        this.notify(newName);
      },
    },
  });
  /* Observable: end */

  /* Observer: start */
  var registryPrototype = {
    observePerson: function (name) {
      console.log('New name', name);
      this.names.push(name);
    },
  };
  /* Observer: end */

  // Nutzung
  var person = Object.create(personPrototype);
  person.name = 'John';
  person._listeners = [];

  var registry = Object.create(registryPrototype);
  registry.names = [];

  person.observe(registry.observePerson.bind(registry));
  person.changeName('Jack');
  person.changeName('Black');
})();
