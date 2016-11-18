(function (angular) {
  'use strict';

  function AuthorList($scope, $location) {
    $scope.navigate = function (id) {
      if (id) {
        $location.path('/edit/' + id);
      } else {
        $location.path('/add');
      }
    };
  }

  AuthorList.$inject = ['$scope', '$location'];

  angular.module('app')
      .controller('authorListCtrl', AuthorList);
})(angular);
