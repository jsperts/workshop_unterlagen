(function(window) {
  'use strict';

  function delayXms(x) {
    var syncStart = Date.now();
    while (Date.now() - syncStart < x) {}
  }

  function debounce(fn, delay) {
    var timer = null;
    return function() {
      // Call the fn after event triggering ended and delay passed
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn();
      }, delay);
    };
  }

  function noDebounce() {
    delayXms(30);
    console.log('called');
  }

  window.addEventListener('scroll', noDebounce);
  //window.addEventListener('scroll', debounce(noDebounce, 100));
})(window);