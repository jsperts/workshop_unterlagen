(function(angular) {
  'use strict';

  var mod = angular.module('functionScopeTestApp', []);

  function MainCtrl() {
    this.called = 'Not Called';
    this.value = 2;
  }

  MainCtrl.prototype.callMe = function(val) {
    this.called = val;
  };

  var htmlTemplate = '<button type="button">Call Now!</button><p>myExpr: {{myExpr()}}</p>';
  function functionDir() {
    return {
      restrict: 'E',
      scope: {
        myExpr: '&gtsExpr',
        myFn: '&gtsFn'
      },
      template: htmlTemplate,
      link: function(scope, element) {
        element.find('button').on('click', function() {
          // Achtung Event-Handlers brauchen $apply wenn die was in der View ändern
          scope.$apply(function() {
            scope.myFn({name: 'Directive'});
          });
        });
      }
    };
  }

  mod.controller('MainCtrl', MainCtrl);
  mod.directive('gtsFunctionDir', functionDir);
})(angular);
