(function(angular) {
  'use strict';

  var mod = angular.module('testApp');

  function colorSelectorCtrl(SendToServer) {
    this.colors = ['black', 'red', 'blue', 'yellow'];
    this.currentColor = '';
    this.send = send;

    function send() {
      SendToServer.send(this.currentColor);
    }
  }
  colorSelectorCtrl.$inject = ['SendToServer'];

  mod.controller('colorSelectorCtrl', colorSelectorCtrl);
})(angular);
