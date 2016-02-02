(function(perf) {
  'use strict';
  function run() {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

    var start = perf.now();

    for (var i = 0; i < arr.length; i++) {
      arr[i];
    }

    var t1 = perf.now();

    var arrLength = arr.length;
    for (var j = 0; j < arrLength; j++) {
      arr[j];
    }

    var t2 = perf.now();

    arr.forEach(function(e) {

    });

    var t3 = perf.now();

    console.log('High Performance Time');
    console.log('t1', t1 - start);
    console.log('t2', t2 - t1);
    console.log('t3', t3 - t2);
  }

  window.highResolutionTime = {
    run: run
  };
})(window.performance);