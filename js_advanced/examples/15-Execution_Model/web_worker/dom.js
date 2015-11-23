(function() {
  'use strict';

  var x = 0;
  var reactButton = document.getElementById('reactor');
  var fibButton = document.getElementById('fib');
  var div = document.getElementById('reactorContent');
  var span = document.getElementById('fibContent');

  reactButton.addEventListener('click', function() {
    x += 1;
    div.textContent = 'Reacted ' + x + ' times!';
  });

  fibButton.addEventListener('click', function() {
    span.textContent = 'calculating...';
    var fibWorker = new Worker('fib.js');
    // Get result from worker
    fibWorker.addEventListener('message', function(event) {
      var res = event.data;
      span.textContent = res.join();
      fibWorker.terminate();
    });

    // Pass parameters to the worker
    fibWorker.postMessage(40);
  });
})();