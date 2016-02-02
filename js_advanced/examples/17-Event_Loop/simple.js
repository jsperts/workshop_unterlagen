(function(window) {
  'use strict';
  var perf = window.performance;

  function run(doneFn) {
    perf.mark('mark_t0');

    function delayXms(x) {
      var syncStart = Date.now();
      while(Date.now() - syncStart < x) {}
    }

    function async() {
      perf.mark('mark_t5');
      doneFn();
    }

    function sync() {
      delayXms(30);
    }

    function longSync() {
      delayXms(120);
    }

    delayXms(10);
    perf.mark('mark_t1');
    setTimeout(async, 100);

    delayXms(40);
    perf.mark('mark_t2');
    sync();
    perf.mark('mark_t3');
    longSync();
    perf.mark('mark_t4');
  }

  window.runSimple = run;
})(window);