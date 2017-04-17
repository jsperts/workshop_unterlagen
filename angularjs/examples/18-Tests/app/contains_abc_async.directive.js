function containsAbcAsync($http) {
  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, modelCtrl) {
      function validator(modelValue, viewValue) {
        return $http.get('/containsABC' + viewValue);
      }

      modelCtrl.$asyncValidators.containsAbc = validator;
    }
  };
}
containsAbcAsync.$inject = ['$http'];

export default containsAbcAsync;
export const name = 'nsContainsAbcAsync';
