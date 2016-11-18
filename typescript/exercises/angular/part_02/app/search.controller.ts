(function (angular) {
  'use strict';

  function Search($scope) {
    $scope.searchTerm = '';
  }
  Search.$inject = ['$scope'];

  angular.module('app')
      .controller('searchCtrl', Search);
})(angular);
