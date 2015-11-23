(function(angular) {
  'use strict';

  var mod = angular.module('testApp');

  function color() {
    return {
      restrict: 'E',
      templateUrl: 'templates/color.html',
      scope: {
        color: '@boxColor'
      },
      link: function(scope, element) {
        element.bind('click', function() {
          element.addClass(scope.color);
        });
      }
    }
  }

  mod.directive('color', color);
})(angular);
