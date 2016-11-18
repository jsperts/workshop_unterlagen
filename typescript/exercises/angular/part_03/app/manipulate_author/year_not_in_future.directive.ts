function yearNotInFuture() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, elem, attrs, ngModel) {
      function isYearInFuture(modelYear) {
        var currentYear = new Date().getFullYear();
        return modelYear <= currentYear;
      }

      ngModel.$validators.yearInFuture = isYearInFuture;
    }
  };
}

export default yearNotInFuture;
export var name = 'myYearNotInFuture';
