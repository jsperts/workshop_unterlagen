(function(perf) {
  'use strict';

  function run() {
    console.timeStamp('start');

    var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

    console.log('console time');

    console.time('first');
    for (var i = 0; i < arr.length; i++) {
      arr[i];
    }
    console.timeEnd('first');

    console.time('second');
    var arrLength = arr.length;
    for (var j = 0; j < arrLength; j++) {
      arr[j];
    }
    console.timeEnd('second');

    console.time('third');
    arr.forEach(function(e) {

    });
    console.timeEnd('third');

    console.timeStamp('end');
  }

  window.consoleTime = {
    run: run
  };
})(window.performance);