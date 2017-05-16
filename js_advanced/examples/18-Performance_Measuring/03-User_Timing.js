(function (perf) {
  'use strict';

  function run() {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

    // mark(name)
    perf.mark('mark_start');

    for (var i = 0; i < arr.length; i++) {
      arr[i];
    }

    perf.mark('mark_t1');

    var arrLength = arr.length;
    for (var j = 0; j < arrLength; j++) {
      arr[j];
    }

    perf.mark('mark_t2');

    arr.forEach(function (e) {

    });

    perf.mark('mark_t3');

    // getEntriesByType(type)
    console.log('Marks', perf.getEntriesByType('mark'));

    // measure(name, startMark, endMark)
    perf.measure('measure_t1', 'mark_start', 'mark_t1');
    perf.measure('measure_t2', 'mark_t1', 'mark_t2');
    perf.measure('measure_t3', 'mark_t2', 'mark_t3');
    perf.measure('measure_time_from_start', 'fetchStart', 'mark_t3');

    console.log('Measures', perf.getEntriesByType('measure'));

    // clearMarks(name?)
    perf.clearMarks();

    console.log('User Timing');
    console.log('t1', perf.getEntriesByName('measure_t1')[0].duration);
    console.log('t2', perf.getEntriesByName('measure_t2')[0].duration);
    console.log('t3', perf.getEntriesByName('measure_t3')[0].duration);
    console.log('Time from start', perf.getEntriesByName('measure_time_from_start')[0].duration);

    // clearMeasures(name?)
    perf.clearMeasures();
  }

  window.userTiming = {
    run: run,
  };
})(performance);
