(function (angular) {
  'use strict';

  function yearNotInFuture() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModel) {
        function isYearInFuture(modelYear) {
          var currentYear = new Date().getFullYear();
          return modelYear <= currentYear;
        }

        ngModel.$validators.yearInFuture = isYearInFuture;
      }
    };
  }

  angular.module('app.manipulate_author')
      .directive('myYearNotInFuture', yearNotInFuture);
})(angular);
