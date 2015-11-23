(function() {
  'use strict';

  // Funktion höherer Ordnung -> hat Funktion als Rückgabewert
  function incBy(i) {
    // private Variable
    var counter = 0;
    return function() {
      return counter += i;
    }; // Closure: Variable counter und i sind in der Umgebung der Funktion
  }

  var incBy2 = incBy(2);
  console.log(incBy2()); // 2
  console.log(incBy2()); // 4

  function incByWithReset(i) {
    var counter = 0;
    function inc() {
      return counter += i;
    }
    // Funktionen sind auch Objekte !
    inc.reset = function() {
      counter = 0;
    };
    return inc;
  }

  var incBy3 = incByWithReset(3);
  console.log(incBy3()); // 3
  console.log(incBy3()); // 6
  incBy3.reset(); // 0
  console.log(incBy3()); // 3
})();

