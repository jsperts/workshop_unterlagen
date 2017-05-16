'use strict';

// Konstruktoren sollten mit Großbuchstabe anfangen
class FIFO {
  constructor() {
    this.queue = [];
  }

  // Nutzung von prototype macht die Konstruktorfunktion kürzer
  // Die Konstruktorfunktion konzentriert sich auf das Initialisieren der Instanz
  add(elem) {
    this.queue.push(elem);
  }

  get() {
    return this.queue.shift();
  }

  clear() {
    this.queue = [];
  }
}
