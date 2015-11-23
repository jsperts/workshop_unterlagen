(function(perf, win) {
  'use strict';

  function run() {
    console.log('Resource Timing');
    console.log(perf.getEntriesByType('resource'));
  }

  window.resourceTiming = {
    run: run
  };
})(performance, window);