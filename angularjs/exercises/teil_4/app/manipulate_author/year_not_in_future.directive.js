function yearNotInFuture() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link(elem, scope, attrs, ngModel) {
      function isYearInFuture(modelYear, viewYear) {
        const currentYear = new Date().getFullYear();
        return viewYear <= currentYear;
      }

      ngModel.$validators.yearInFuture = isYearInFuture;
    }
  };
}

export default yearNotInFuture;
export const name = 'myYearNotInFuture';
