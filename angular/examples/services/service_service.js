(function(angular) {
  'use strict';

  var mod = angular.module('ServicesDemo');

  mod.service('MyService', function() {
    var value = 'Wert fuer den Service';
    this.getValue = function() {
      return value;
    };
  });

  mod.controller('ServiceCtrl', function(MyService) {
    this.name = MyService.getValue(); // 'Wert fuer den Service'
  });
})(angular);
