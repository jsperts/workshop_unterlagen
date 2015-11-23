(function() {
  'use strict';

  var body = document.getElementsByTagName('body')[0];

  function debounce(fn, immediate, delay) {
    var timer = null;
    return function() {
      if (immediate && timer === null) {
        fn(immediate);
      }
      // Call the fn after event triggering ended and delay passed
      clearTimeout(timer);
      timer = setTimeout(function() {
        // reset timer
        timer = null;
        fn();
      }, delay);
    };
  }

  /*window.addEventListener('scroll', debounce(function(firstRun) {
        if (firstRun) {
          body.className = '';
        } else {
          body.className = 'enable-animations';
        }
      }, true, 500)
  );*/
})();