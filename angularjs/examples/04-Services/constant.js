import angular from 'angular';

const constant = {
  name: 'Ich bin konstant'
};

angular.module('app', [])
    .constant('constant', constant);
