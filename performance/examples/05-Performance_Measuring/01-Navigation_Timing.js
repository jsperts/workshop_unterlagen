(function (perf, window) {
  'use strict';

  function run() {
    console.log('Navigation Timing');
    /*
     * Types:
     * 0: link click, navigation bar url, form submission
     * 1: reload
     * 2: back/forward
     * 255: undefined
     */
    console.log('Navigation type', perf.navigation.type);
    console.log('Latency', perf.timing.responseStart - perf.timing.fetchStart, 'ms');
    console.log('Transfer time', perf.timing.responseEnd - perf.timing.responseStart, 'ms');
    console.log('Done loading', perf.timing.loadEventStart - perf.timing.responseEnd, 'ms');
  }

  window.navigationTiming = {
    run: run,
  };
})(window.performance, window);
