import {routingTemplate} from './main.component';

function routeProviderConfig($routeProvider) {
  $routeProvider.when('/', {
    template: routingTemplate
  }).otherwise('/');
}

export default ['$routeProvider', routeProviderConfig];
