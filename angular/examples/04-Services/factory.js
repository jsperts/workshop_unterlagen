import angular from 'angular';

function factory() {
  const value = 'Factory Wert';
  return {
    getValue() {
      return value;
    }
  };
}

angular.module('app', [])
    .factory('factory', factory);
