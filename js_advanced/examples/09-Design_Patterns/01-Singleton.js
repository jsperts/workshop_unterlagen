// Beispielimplementierung, es gibt auch andere möglichkeiten
(function() {
  'use strict';

  /* Singleton: start */
  var http = (function() {
    var instance;

    function init() {
      var queue = [];
      var requestInProgress = false;

      // Private
      function callServer(req) {
        // Eigentlicher Serveraufruf
      }

      function get(req) {
        if (requestInProgress) {
          queue.push(req);
        } else {
          requestInProgress = true;
          callServer(req);
        }
      }

      function post() {
        if (requestInProgress) {
          queue.push(req);
        } else {
          requestInProgress = true;
          callServer(req);
        }
      }

      return {
        get: get,
        post: post
      };
    }

    return {
      getInstance: function() {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    };
  })();
  /* Singleton: end */

  // Nutzung
  var httpInstance1 = http.getInstance();
  var httpInstance2 = http.getInstance();

  console.log('Instance equal?', httpInstance1 === httpInstance2);
  console.log('Queues equal?', httpInstance1.queue === httpInstance2.queue);
})();