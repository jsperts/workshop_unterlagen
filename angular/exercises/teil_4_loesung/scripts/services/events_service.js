(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var constantName = 'Events';

  var events = {
    filterFinished: 'filterFinished'
  };

  mod.constant(constantName, events);
})(angular, window.MY_APP_MODULE_NAME);
