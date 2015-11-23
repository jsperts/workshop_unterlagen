(function(angular) {
  'use strict';

  var mod = angular.module('ctrlAsNested', []);
  mod.controller('myCtrl', function() {
    this.name = 'Nikolas';
  });
  mod.controller('nestedCtrl', function() {
    this.name = 'Markus';
  });
})(angular);
