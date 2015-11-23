(function(angular) {
  'use strict';

  var mod = angular.module('twoWayScopeTestApp', []);

  function MainCtrl() {
    this.name = '';
  }

  var htmlTemplate = '<p>Name: <input ng-model="dirName"/></p>';
  function nameDir() {
    return {
      restrict: 'E',
      scope: {
        dirName: '=gtsName'
      },
      template: htmlTemplate
    };
  }

  mod.directive('gtsNameDir', nameDir);
  mod.controller('MainCtrl', MainCtrl);
})(angular);
