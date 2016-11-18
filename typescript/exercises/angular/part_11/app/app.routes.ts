import * as angular from 'angular';

function routeProviderConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/', {
    templateUrl: './app/main.template.html',
  }).otherwise('/');
}

export default ['$routeProvider', routeProviderConfig];
