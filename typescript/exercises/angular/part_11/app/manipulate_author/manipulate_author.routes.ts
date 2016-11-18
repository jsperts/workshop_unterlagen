import * as angular from 'angular';

function routeProviderConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/add', {
    templateUrl: './app/manipulate_author/add_author.template.html',
  }).when('/edit/:id', {
    templateUrl: './app/manipulate_author/edit_author.template.html',
  });
}

export default ['$routeProvider', routeProviderConfig];
