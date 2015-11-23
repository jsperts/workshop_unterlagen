'use strict';

function fifo() {
  // queue sollte von aussen nicht direkt benutzt werden
  this.queue = [];

  this.add = function(elem) {
    this.queue.push(elem);
  };

  this.get = function() {
    return this.queue.shift();
  };

  this.clear = function() {
    this.queue = [];
  };
}
