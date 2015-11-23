(function(angular) {
  'use strict';

  // Wir müssen das ngRoute Modul als Abhängigkeit definieren!
  var mod = angular.module('routingTestApp', ['ngRoute']);
  mod.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {
      templateUrl: '/view1.html'
    }).when('/view2', {
      templateUrl: '/view2.html',
      controller: 'View2Ctrl'
    }).when('/view3/:id', {
      templateUrl: '/view3.html',
      controller: 'View3Ctrl',
      controllerAs: 'ctrl'
    }).when('/view4', {
      templateUrl: '/view4.html',
      controller: 'View4Ctrl',
      controllerAs: 'ctrl',
      resolve: {
        data: function($q) {
          return $q(function(resolve, reject) {
            setTimeout(function() {
              resolve('Meine Daten');
            }, 2000);
          });
        }
      }
    }).otherwise({
      redirectTo: '/'
    });

    // URL hat ein Hash (#)
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!')
  }]);

  function View1Ctrl($scope, $location) {
    $scope.viewName = 'View1';
    $scope.location = $location.path();
  }

  View1Ctrl.$inject = ['$scope', '$location'];

  function View2Ctrl($scope, $location) {
    $scope.viewName = 'View2';
    $scope.location = $location.path();
  }

  View2Ctrl.$inject = ['$scope', '$location'];

  function View3Ctrl($location, $routeParams) {
    this.viewName = 'View3';
    this.location = $location.path();
    this.id = $routeParams.id;
  }

  View3Ctrl.$inject = ['$location', '$routeParams'];

  function View4Ctrl($location, data) {
    this.viewName = 'View4';
    this.location = $location.path();
    this.data = data;
  }
  View4Ctrl.$inject = ['$location', 'data'];

  function MainCtrl($route, $scope) {
    this.$route = $route;
    $scope.$on('$routeChangeStart', function(event, next, current) {
      console.log('starting');
    });
    $scope.$on('$routeChangeSuccess', function(event, current, previous) {
      console.log('change success');
    })
  }

  MainCtrl.$inject = ['$route', '$scope'];

  mod.controller('View1Ctrl', View1Ctrl);
  mod.controller('View2Ctrl', View2Ctrl);
  mod.controller('View3Ctrl', View3Ctrl);
  mod.controller('View4Ctrl', View4Ctrl);
  mod.controller('MainCtrl', MainCtrl);
})(angular);
