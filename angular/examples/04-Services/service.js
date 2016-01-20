import angular from 'angular';

class MyService {
  constructor() {
    this.value = 'Wert fuer den Service';
  }
  getValue() {
    return this.value;
  }
}

angular.module('app', [])
    .service('MyService', MyService);
