(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var directiveName = 'yearNotInFuture';

  function yearNotInFuture() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(elem, scope, attrs, ngModel) {
        function isYearInFuture(modelYear, viewYear) {
          var currentYear = new Date().getFullYear();
          return viewYear <= currentYear;
        }

        ngModel.$validators.yearInFuture = isYearInFuture;
      }
    };
  }

  mod.directive(directiveName, yearNotInFuture);
})(angular, window.MY_APP_MODULE_NAME);
