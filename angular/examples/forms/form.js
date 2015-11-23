(function(angular) {
  'use strict';

  var mod = angular.module('formsTestApp', []);

  function MainCtrl() {
    this.user = {
      firstName: '',
      lastName: '',
      title: '',
      lang: {},
      living: '',
      happy: ''
    };
    this.titles = ['Herr', 'Frau'];
    this.languages = [{
      id: 'langEN',
      short: 'en',
      long: 'Englisch'
    },{
      id: 'langDE',
      short: 'de',
      long: 'Deutsch'
    }];
    this.cities = ['Darmstadt', 'Frankfurt', 'Berlin', 'Bremen'];
  }

  MainCtrl.prototype.sendToServer = function() {
    console.log(this.testForm);
    console.log(this.user);
  };

  mod.controller('MainCtrl', MainCtrl);

})(angular);
