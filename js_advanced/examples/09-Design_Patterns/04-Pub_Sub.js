// Beispielimplementierung, es gibt auch andere Möglichkeiten
(function () {
  'use strict';

  var pubSubSystem = (function () {
    var topics = {};

    // Auch bekannt als addListener, on, bind
    // topic wird oft event genannt
    // func wird oft cb oder callback genannt
    function subscribe(topic, func) {
      if (topics[topic]) {
        topics[topic].push(func);
      } else {
        topics[topic] = [func];
      }
    }

    // Auch bekannt als removeListener, off, unbind, attach
    function unsubscribe(topic, func) {
      if (topics[topic]) {
        topics[topic].splice(topics[topic].indexOf(func), 1);
      }
    }

    // Auch bekannt als trigger, triggerEvent, emit
    function publish(topic, args) {
      if (topics[topic]) {
        var callbacks = topics[topic];
        callbacks.forEach(function (cb) {
          cb(args);
        });
      }
    }

    return {
      subscribe: subscribe,
      unsubscribe: unsubscribe,
      publish: publish,
    };
  })();

  // Nutzung
  var topic = 'elementAdded';

  function elementAdded(data) {
    console.log('Data', data);
  }

  pubSubSystem.subscribe(topic, elementAdded);

  pubSubSystem.publish(topic, 'data');

  pubSubSystem.unsubscribe(topic, elementAdded);
})();
