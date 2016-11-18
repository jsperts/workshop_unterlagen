import {name as authorsServiceName} from './common/authors.service';

function Main($scope, authorsService) {
  this.$scope = $scope;
  this.authorsService = authorsService;
  this.$scope.authors = [];
  authorsService.getAuthors().then(function (data) {
    $scope.authors = data;
  }).catch(function (resp) {
    console.log(resp);
  });

  this.$scope.search = this.search.bind(this);
  this.$scope.remove = this.remove.bind(this);
}

Main.$inject = ['$scope', authorsServiceName];

Main.prototype.search = function (searchTerm) {
  this.$scope.authors = this.authorsService.filter(searchTerm);
};

Main.prototype.remove = function (id) {
  var $scope = this.$scope;
  this.authorsService.deleteAuthor(id).then(function (data) {
    $scope.authors = data;
  }).catch(function (resp) {
    console.log(resp);
  });
};

export default Main;
export var name = 'mainCtrl';
