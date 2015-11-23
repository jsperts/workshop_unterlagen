(function(angular) {
  'use strict';

  var constant = {
    name: 'Ich bin konstant'
  };

  var mod = angular.module('ServicesDemo');
  mod.constant('ConstantService', constant);

  mod.controller('ConstantCtrl', function(ConstantService) {
    this.name = ConstantService.name; // 'Ich bin konstant'
  });
})(angular);
