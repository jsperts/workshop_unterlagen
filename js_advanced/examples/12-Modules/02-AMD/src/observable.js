define(function() {
  'use strict';

  function Observable() {
    this._listeners = [];
  }

  Observable.prototype.observe = function(cb) {
    this._listeners.push(cb);
  };

  Observable.prototype.notify = function(data) {
    this._listeners.forEach(function(listener) {
      listener(data);
    });
  };

  // Interface
  return Observable;
});