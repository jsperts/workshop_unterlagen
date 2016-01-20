import angular from 'angular';

const myValue = {
  name: 'Ich bin ein Wert'
};

angular.module('app', [])
    .value('value', myValue);
