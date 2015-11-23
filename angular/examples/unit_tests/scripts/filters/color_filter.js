(function(angular) {
  'use strict';

  var mod = angular.module('testApp');

  function colorFilter() {
    return function(array, currentColor) {
      if (currentColor === '' || currentColor === undefined) {
        return array;
      }
      return array.filter(function(elem) {
        return currentColor === elem;
      });
    };
  }

  mod.filter('colorFilter', colorFilter);
})(angular);
