function routeProviderConfig($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './app/main.template.html',
  }).otherwise('/');
}

export default ['$routeProvider', routeProviderConfig];
