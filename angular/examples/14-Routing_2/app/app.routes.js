import {name as resolveFactoryName} from './resolve.factory';
import {name as rejectFactoryName} from './reject.factory';

function routing($routeProvider) {
  $routeProvider.when('/', {
    template: '<p>Please select a component</p>'
  }).when('/comp1', {
    template: '<comp1 data="comp1Data.data"></comp1>',
    resolve: {
      data: resolveFactoryName
    },
    resolveAs: 'comp1Data'
  }).when('/comp2', {
    template: '<comp2></comp2>',
    resolve: {
      data: rejectFactoryName
    }
  }).otherwise({
    redirectTo: '/'
  });
}

export default ['$routeProvider', routing];
