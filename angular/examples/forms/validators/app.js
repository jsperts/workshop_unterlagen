(function(angular) {
  'use strict';

  var mod = angular.module('formsTestApp', []);
  mod.controller('myFormCtrl', FormCtrl);
  mod.directive('gtsContainsAbc', gtsContainsAbc);

  function FormCtrl() {
    this.text = '';
  }

  function gtsContainsAbc() {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, modelCtrl) {
        // Achtung: modelValue ist der Modell-Wert definiert im ngModelController und nicht in unserem Controller!
        function validator(modelValue, viewValue) {
          // modelValue und viewValue sind undefined bei ersten Aufruf
          if (typeof modelValue === 'string') {
            return modelValue.indexOf('abc') !== -1;
          } else {
            return false;
          }
        }
        modelCtrl.$validators.containsAbc = validator;
        // Es gibt auch $asyncValidators die mit Promises arbeiten
      }
    };
  }
})(angular);
