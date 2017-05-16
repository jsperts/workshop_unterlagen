(function (window) {
  'use strict';

  function delayXms(x) {
    var syncStart = Date.now();
    while (Date.now() - syncStart < x) {}
  }

  function throttle(fn, delay) {
    var last = 0;
    var timer = null;
    return function (event) {
      var now = Date.now();
      // Next event trigger, call only if delay passed
      if (last && now < last + delay) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          fn(event);
        }, delay);
      } else {
        // First event trigger
        last = now;
        fn(event);
      }
    };
  }

  function noThrottle() {
    delayXms(30);
    console.log('called');
  }

  window.addEventListener('scroll', noThrottle);
  // window.addEventListener('scroll', throttle(noThrottle, 250));
})(window);
