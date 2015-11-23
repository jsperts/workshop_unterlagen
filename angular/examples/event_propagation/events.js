(function(angular) {
  'use strict';

  var mod = angular.module('eventsTestApp', []);

  function RootCtrl($rootScope) {
    var self = this;
    this.gotBroadcast = false;
    this.gotEmit = false;
    $rootScope.$on('broadcast', function() {
      self.gotBroadcast = true;
    });
    $rootScope.$on('emit', function() {
      self.gotEmit = true;
    });

    this.broadcast = function() {
      $rootScope.$broadcast('broadcast');
    };
    this.emit = function() {
      $rootScope.$emit('emit');
    };
    this.reset = function() {
      this.gotEmit = false;
      this.gotBroadcast = false;
      $rootScope.$broadcast('reset');
    };
  }
  RootCtrl.$inject = ['$rootScope'];

  var ctrlNames = ['mainCtrl', 'subCtrl1', 'subCtrl1a', 'subCtrl1b', 'subCtrl2', 'subCtrl2a', 'subCtrl2b'];

  function getCtrl() {
    function CtrlFn($scope) {
      var self = this;
      this.gotBroadcast = false;
      this.gotEmit = false;
      $scope.$on('broadcast', function() {
        self.gotBroadcast = true;
      });
      $scope.$on('emit', function() {
        self.gotEmit = true;
      });
      $scope.$on('reset', function() {
        self.gotBroadcast = false;
        self.gotEmit = false;
      });
      this.broadcast = function() {
        $scope.$broadcast('broadcast');
      };
      this.emit = function() {
        $scope.$emit('emit');
      };
    }
    CtrlFn.$inject = ['$scope'];
    return CtrlFn;
  }

  var ctrls = ctrlNames.map(function(name) {
    var ctrl = {
      name: name,
      fn: getCtrl()
    };
    return ctrl;
  });

  mod.controller('rootCtrl', RootCtrl);
  ctrls.forEach(function(ctrl) {
    mod.controller(ctrl.name, ctrl.fn);
  });
})(angular);
