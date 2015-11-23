(function(angular) {
  'use strict';

  var mod = angular.module('stdCtrl', []);
  mod.controller('myCtrl', function($scope) {
    $scope.name = 'Nikolas';
  });
  mod.controller('nestedCtrl', function($scope) {
    $scope.name = 'Markus';
  });
})(angular);
