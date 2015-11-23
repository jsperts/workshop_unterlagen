'use strict';

// Konstruktoren sollten mit Großbuchstabe Anfangen
// Hilft zu unterscheiden wann man "new" braucht
function FIFO() {
  // queue sollte von aussen nicht direkt benutzt werden
  // Unterstrich als Präfix wird oft benutzt um das zu signalisieren
  this._queue = [];
}

// Nutzung von prototype macht die Konstruktorfunktion kürzer
// Die Konstruktorfunktion konzentriert sich auf das Initialisieren der Instanz
FIFO.prototype.add = function(elem) {
  this._queue.push(elem);
};

FIFO.prototype.get = function() {
  return this._queue.shift();
};

FIFO.prototype.clean = function() {
  this._queue = [];
};

