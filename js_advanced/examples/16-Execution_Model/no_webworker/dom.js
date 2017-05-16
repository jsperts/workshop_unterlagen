(function(fib) {
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
    //var res = Fib.calc(40);
    var res = Fib.calc(10);
    span.textContent = res.join();
  });
})(window.Fib);
