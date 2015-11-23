(function(angular) {
  'use strict';

  var myValue = {
    name: 'Ich bin ein Wert'
  };

  var mod = angular.module('ServicesDemo');
  mod.constant('ValueService', myValue);

  mod.controller('ValueCtrl', function(ValueService) {
    this.name = ValueService.name; // 'Ich bin ein Wert'
  });
})(angular);
