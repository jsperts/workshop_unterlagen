(function(angular) {
  'use strict';

  var mod = angular.module('ctrlAs', []);
  mod.controller('myCtrl', MyCtrl);
  // Mit dieser Syntax im Controller muss man Controller As Syntax im HTML
  function MyCtrl($interval) {
    var self = this;
    this.name = '';

    $interval(function() {
      // Achtung thisBinding
      self.name = 'reset!';
    }, 10000);
  }

  MyCtrl.prototype.change = function() {
    this.name = 'New Name';
  };

  MyCtrl.$inject = ['$interval'];
})(angular);
