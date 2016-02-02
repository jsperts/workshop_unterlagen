(function(window) {
  'use strict';
  var perf = window.performance;

  var iterationsNoTimeout = 100000000;
  var iterationsWithTimeout = 10000;
  var iterationsWithTimeoutTimeBased = 10000000;

  function noTimeout(doneFn, progressFn) {
    perf.mark('mark_start');
    var j = 0;
    for (var i = 0; i < iterationsNoTimeout; i++) {
      j++;
      if (j % (iterationsNoTimeout/1000) === 0) {
        progressFn(1);
      }
    }
    perf.mark('mark_end');
    doneFn('noTimeout');
  }

  function withTimeout(doneFn, progressFn) {
    perf.mark('mark_start');
    var steps = iterationsWithTimeout / 10000;
    var start = 0;
    var end = steps;
    var j = 0;

    function addOne() {
      for (var i = start; i < end; i++) {
        j++;
      }
      if (end === iterationsWithTimeout) {
        perf.mark('mark_end');
        progressFn(1);
        doneFn('withTimeout');
      } else {
        start = end;
        end += steps;
        if (j % (iterationsWithTimeout/1000) === 0) {
          progressFn(1);
        }
        setTimeout(addOne, 0);
      }
    }

    addOne();
  }

  function withTimeoutTimeBased(doneFn, progressFn) {
    perf.mark('mark_start');
    var j = 0;
    var index = 0;

    function addOne() {
      var start = new Date().getTime();
      while (new Date().getTime() - start < 70 && index !== iterationsWithTimeoutTimeBased) {
        j++;
        index++;
      }
      if (index === iterationsWithTimeoutTimeBased) {
        perf.mark('mark_end');
        progressFn(1000, true);
        doneFn('withTimeoutTimeBased');
      } else {
        progressFn(Math.ceil(index/(iterationsWithTimeoutTimeBased/1000)), true);
        setTimeout(addOne, 0);
      }
    }

    addOne();
  }

  window.t = {
    withTimeout: withTimeout,
    withTimeoutTimeBased: withTimeoutTimeBased,
    noTimeout: noTimeout
  };
})(window);