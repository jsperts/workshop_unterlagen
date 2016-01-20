import {routingTemplate} from './main.component';

function routeProviderConfig($routeProvider) {
  $routeProvider.when('/', {
    template: routingTemplate
  }).when('/add', {
    template: '<my-add-author></my-add-author>'
  }).when('/edit/:id', {
    template: '<my-edit-author></my-edit-author>'
  }).otherwise('/');
}

export default ['$routeProvider', routeProviderConfig];
