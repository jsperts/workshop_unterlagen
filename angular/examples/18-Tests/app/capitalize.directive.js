function capitalize() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, modelCtrl) {
      function smallToCaps(modelValue) {
        if (modelValue) {
          return modelValue.toUpperCase();
        } else {
          return undefined;
        }
      }

      function capsToSmall(viewValue) {
        if (viewValue) {
          // Zeige keine Kleinbuchstaben an
          modelCtrl.$setViewValue(viewValue.toUpperCase());
          // View aktualisieren (input-Direktive implementiert $render)
          modelCtrl.$render();
          return viewValue.toLowerCase();
        } else {
          return undefined;
        }
      }

      // model -> view
      modelCtrl.$formatters.push(smallToCaps);
      // view -> model
      modelCtrl.$parsers.push(capsToSmall);
    }
  };
}

export default capitalize;
export const name = 'nsCapitalize';
