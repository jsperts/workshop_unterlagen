(function(window) {
  'use strict';
  var perf = window.performance;

  var x = 0;
  var reactButton = document.getElementById('reactor');

  var noTimeout = document.getElementById('noTimeout');
  var withTimeout = document.getElementById('withTimeout');
  var withTimeoutTimeBased = document.getElementById('withTimeoutTimeBased');

  var noMemoization = document.getElementById('noMemoization');
  var memoization = document.getElementById('memoization');
  var memoization80 = document.getElementById('memoization80');

  var mapThenFilter = document.getElementById('mapThenFilter');
  var filterThenMap = document.getElementById('filterThenMap');

  var div = document.getElementById('reactorContent');

  reactButton.addEventListener('click', function() {
    x += 1;
    div.textContent = 'Reacted ' + x + ' times!';
  });

  function doneFn(fn) {
    perf.measure('measure_duration', 'mark_start', 'mark_end');
    console.log('Duration', fn, perf.getEntriesByName('measure_duration')[0].duration, 'ms');
    perf.clearMarks();
    perf.clearMeasures();
  }

  function progress(elem) {
    return function(step, absolute) {
      if (absolute) {
        elem.style.width = step + 'px';
      } else {
        elem.style.width = parseInt(elem.style.width) + step + 'px';
      }
    }
  }

  noTimeout.addEventListener('click', function() {
    var progressFn = progress(document.getElementById('progressNoTimeout'));
    window.t.noTimeout(doneFn, progressFn);
  });

  withTimeout.addEventListener('click', function() {
    var progressFn = progress(document.getElementById('progressWithTimeout'));
    window.t.withTimeout(doneFn, progressFn);
  });

  withTimeoutTimeBased.addEventListener('click', function() {
    var progressFn = progress(document.getElementById('progressWithTimeoutTimeBased'));
    window.t.withTimeoutTimeBased(doneFn, progressFn);
  });

  noMemoization.addEventListener('click', function() {
    perf.mark('mark_start');
    var res = window.m.noMemoization(40);
    perf.mark('mark_end');
    console.log(res);
    doneFn('noMemoization');
  });

  memoization.addEventListener('click', function() {
    perf.mark('mark_start');
    var res = window.m.memoization(40);
    perf.mark('mark_end');
    console.log(res);
    doneFn('memoization');
  });

  memoization80.addEventListener('click', function() {
    perf.mark('mark_start');
    var res = window.m.memoization(80);
    perf.mark('mark_end');
    console.log(res);
    doneFn('memoization');
  });

  mapThenFilter.addEventListener('click', function() {
    window.l.mapThenFilter(doneFn);
  });

  filterThenMap.addEventListener('click', function() {
    window.l.filterThenMap(doneFn);
  });
})(window);