import angular from 'angular';

class Provider {
  config(name) {
    this.name = name;
  }

  $get() {
    const self = this;
    // Factory
    return {
      getName() {
        return self.name;
      }
    };
  }
}

angular.module('app', [])
    .provider('Provider', provider);
