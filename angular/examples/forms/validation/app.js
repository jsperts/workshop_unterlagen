(function(angular) {
  'use strict';

  var mod = angular.module('formsTestApp', []);
  mod.controller('myFormCtrl', FormCtrl);

  function FormCtrl() {
    this.user = {
      name: '',
      pass: ''
    };
  }

  FormCtrl.prototype.login = function() {
    var form = this.loginForm;
    if (form.$valid) {
      console.log('update!');
    } else {
      console.log('fehler!');
    }
  };
})(angular);
