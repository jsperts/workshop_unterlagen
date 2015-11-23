(function(angular) {
  'use strict';

  var mod = angular.module('ServicesDemo');

  mod.factory('FactoryService', function() {
    var value = 'Factory Wert';
    return {
      getValue: function() {
        return value;
      }
    };
  });

  mod.controller('FactoryCtrl', function(FactoryService) {
    this.name = FactoryService.getValue(); // 'Factory Wert'
  })
})(angular);
