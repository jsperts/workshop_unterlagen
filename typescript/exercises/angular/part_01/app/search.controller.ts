(function (angular) {
  'use strict';

  function Search($scope) {
    $scope.searchTerm = '';
  }

  angular.module('app')
      .controller('searchCtrl', Search);
})(angular);
