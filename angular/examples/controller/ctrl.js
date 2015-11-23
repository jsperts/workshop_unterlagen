(function(angular) {
  'use strict';

  // Ctrl am ende des Controllernames -> Muss nicht sein is aber Konvention
  var mod = angular.module('stdCtrl', []);
  mod.controller('myCtrl', function($scope, $interval) {
    $scope.name = '';

    $scope.change = function() {
      $scope.name = 'New Name';
    };

    $interval(function() {
      $scope.name = 'reset!';
    }, 10000);
  });
})(angular);
