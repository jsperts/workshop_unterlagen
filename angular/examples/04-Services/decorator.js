import angular from 'angular';

function factory() {
  return {
    getName() {
      return 'Max';
    }
  };
}

function decorator($delegate) {
  return {
    getName() {
      return `Decorated: ${$delegate.getName()}`;
    }
  };
}

angular.module('app', [])
    .factory('factoryDecorator', factory)
    .decorator('factoryDecorator', decorator);
