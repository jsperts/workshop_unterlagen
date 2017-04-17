import {name as loggingFactoryName} from './logging.factory';

function httpConfig($httpProvider) {
  $httpProvider.defaults.headers.get = {'Accept': 'application/json'};
  $httpProvider.useApplyAsync(true);
  $httpProvider.interceptors.push(loggingFactoryName);
}

export default ['$httpProvider', httpConfig];
