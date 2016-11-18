import * as angular from 'angular';
import {routingTemplate} from './main.component';

function routeProviderConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/', {
    template: routingTemplate
  }).otherwise('/');
}

export default ['$routeProvider', routeProviderConfig];
