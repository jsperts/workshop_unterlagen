function onClick() {
  return {
    restrict: 'A', // Kann nur als Attribut benutzt werden
    priority: 0,
    link(scope, element, attrs) { // attrs: die Attribute des Elements in camelCase, wird geteilt von allen Direktiven, die auf dem Element definiert sind
      const colorClass = attrs.nsOnClick;

      // element ist ein jqLite-Objekt
      // https://docs.angularjs.org/api/ng/function/angular.element
      element.on('click', function() {
        element.toggleClass(colorClass);
      });
    }
  };
}

export default onClick;
// Kein ng nutzen. Eigenen Namespace definieren: hier 'ns'
export const name = 'nsOnClick';
