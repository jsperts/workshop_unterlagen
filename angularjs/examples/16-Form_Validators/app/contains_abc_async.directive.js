function containsAbcAsync($q) {
  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, modelCtrl) {
      function validator(modelValue, viewValue) {
        console.log('called');
        return $q((resolve, reject) => {
          setTimeout(() => {
            if (typeof viewValue === 'string') {
              if (viewValue.indexOf('abc') !== -1) {
                resolve();
              } else {
                reject();
              }
            } else {
              reject();
            }
          }, 3000);
        });
      }

      modelCtrl.$asyncValidators.containsAbc = validator;
    }
  };
}
containsAbcAsync.$inject = ['$q'];

export default containsAbcAsync;
export const name = 'nsContainsAbcAsync';
