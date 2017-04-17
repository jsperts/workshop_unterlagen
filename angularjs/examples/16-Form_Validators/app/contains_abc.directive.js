function containsAbc() {
  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, modelCtrl) {
      function validator(modelValue, viewValue) {
        if (typeof viewValue === 'string') {
          return viewValue.indexOf('abc') !== -1;
        } else {
          return false;
        }
      }

      modelCtrl.$validators.containsAbc = validator;
    }
  };
}

export default containsAbc;
export const name = 'nsContainsAbc';
