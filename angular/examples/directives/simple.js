(function(angular) {
  'use strict';

  var mod = angular.module('simpleDirectiveTestApp', []);

  var htmlTemplate = "<p>Meine Direktive hat ein Template!</p>";
  function simpleDir() {
    return {
      restrict: 'E', // Kann nur als Tag benutzt werden
      template: htmlTemplate
    };
  }

  function simpleDirWithBehaviour() {
    return {
      restrict: 'A', // Kann nur als Attribut benutzt werden
      link: function(scope, element, attrs) { // attrs: die Attribute des Elements in camelCase, wird geteilt von allen Direktiven die auf dem Element definiert sind

        var colorClass = attrs.gtsSimpleDirWithBehaviour;

        // element ist ein jqLite-Objekt
        // https://docs.angularjs.org/api/ng/function/angular.element
        element.on('click', function() {
          element.toggleClass(colorClass);
        });
      }
    };
  }

  // Achtung: Namen camelCase im JavaScript, Bindestrich im HTML
  // Kein ng nutzen. Eigenen Namespace definieren: hier 'gts'
  mod.directive('gtsSimpleDir', simpleDir);
  mod.directive('gtsSimpleDirWithBehaviour', simpleDirWithBehaviour);
})(angular);
