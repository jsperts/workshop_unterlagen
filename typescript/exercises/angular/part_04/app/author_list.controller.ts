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

export default AuthorList;
export const name = 'authorListCtrl';
