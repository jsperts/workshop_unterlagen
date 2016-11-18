import * as angular from 'angular';

function routeProviderConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/add', {
    template: '<my-add-author></my-add-author>'
  }).when('/edit/:id', {
    template: '<my-edit-author></my-edit-author>'
  });
}

export default ['$routeProvider', routeProviderConfig];
