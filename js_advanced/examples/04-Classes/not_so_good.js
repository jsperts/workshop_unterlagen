'use strict';

class fifo {
  constructor() {
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
}
