function routing($routeProvider) {
  $routeProvider.when('/', {
    template: '<p>Please select a component</p>'
  }).when('/comp1', {
    template: '<comp1></comp1>'
  }).when('/comp2/:id', {
    template: '<comp2></comp2>'
  }).otherwise({
    redirectTo: '/'
  });
}

export default ['$routeProvider', routing];
