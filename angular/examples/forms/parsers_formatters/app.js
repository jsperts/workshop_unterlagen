(function(angular) {
  'use strict';

  var mod = angular.module('formsTestApp', []);
  mod.controller('myFormCtrl', FormCtrl);
  mod.directive('gtsCapitalize', gtsCapitalize);

  function FormCtrl() {
    this.text = 'small';
  }

  function gtsCapitalize() {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, modelCtrl) {
        // modelValue ist der Wert im Controller
        function smallToCaps(modelValue) {
          var viewValue;
          if (modelValue) {
            viewValue = modelValue.toUpperCase();
          }
          return viewValue;
        }
        // viewValue ist der Wert im input-Feld
        function capsToSmall(viewValue) {
          var modelValue;
          if (viewValue) {
            modelValue = viewValue.toLowerCase();
            // Zeige keine Kleinbuchstaben an
            modelCtrl.$setViewValue(viewValue.toUpperCase());
            // View aktualisieren
            modelCtrl.$render();
          }
          return modelValue;
        }

        modelCtrl.$parsers.push(capsToSmall);
        modelCtrl.$formatters.push(smallToCaps);
      }
    };
  }
})(angular);
