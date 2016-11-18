import * as angular from 'angular';

function yearNotInFuture(): angular.IDirective {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (
        scope: angular.IScope,
        elem: JQuery,
        attrs: angular.IAttributes,
        ngModel: angular.INgModelController
    ) {
      function isYearInFuture(modelYear: number) {
        const currentYear = new Date().getFullYear();
        return modelYear <= currentYear;
      }

      ngModel.$validators['yearInFuture'] = isYearInFuture;
    }
  };
}

export default yearNotInFuture;
export var name = 'myYearNotInFuture';
