// Beispielimplementierung, es gibt auch andere Möglichkeiten
// Implementierung für ES5, Pseudoklassisch
(function() {
  'use strict';

  // Basis Konstruktorfunktion für alle Observables
  function Observable() {
    this._listeners = [];
  }
  Observable.prototype.observe = function(cb){
    this._listeners.push(cb);
  };

  Observable.prototype.notify = function(data) {
    this._listeners.forEach(function(listener) {
      listener(data);
    });
  };

  /* Observable: start */
  function Person(name) {
    Observable.call(this);
    this.name = name;
  }

  Person.prototype = Object.create(Observable.prototype);

  Person.prototype.constructor = Person;

  Person.prototype.changeName = function(newName) {
    this.name = newName;
    this.notify(newName);
  };
  /* Observable: end */

  /* Observer: start */
  function Registry() {
    this.names = [];
  }

  Registry.prototype.observePerson = function(name) {
    console.log('New name', name);
    this.names.push(name);
  };
  /* Observer: end */

  // Nutzung
  var person = new Person('John');
  var registry = new Registry();

  person.observe(registry.observePerson.bind(registry));
  person.changeName('Jack');
  person.changeName('Black');
})();
