(function () {
  'use strict';

  var navigationTiming = document.getElementById('navigationTiming');
  var highResolutionTime = document.getElementById('highResolutionTime');
  var userTiming = document.getElementById('userTiming');
  var resourceTiming = document.getElementById('resourceTiming');
  var consoleTime = document.getElementById('consoleTime');

  navigationTiming.addEventListener('click', function () {
    window.navigationTiming.run();
  });

  highResolutionTime.addEventListener('click', function () {
    window.highResolutionTime.run();
  });

  userTiming.addEventListener('click', function () {
    window.userTiming.run();
  });

  resourceTiming.addEventListener('click', function () {
    window.resourceTiming.run();
  });

  consoleTime.addEventListener('click', function () {
    window.consoleTime.run();
  });
})();
