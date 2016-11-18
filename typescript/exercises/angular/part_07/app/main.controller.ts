import { name as authorsServiceName } from './common/authors.service';

import { AuthorWithID } from './common/interfaces/author';
import { AuthorsServiceInstance } from './common/interfaces/services';

import { MainCtrlCtor, MainCtrlInstance } from './common/interfaces/controllers';

const Main: MainCtrlCtor = function Main($scope, authorsService: AuthorsServiceInstance): MainCtrlInstance {
  this.$scope = $scope;
  this.authorsService = authorsService;
  this.$scope.authors = [];
  authorsService.getAuthors().then((data: Array<AuthorWithID>) => {
    $scope.authors = data;
  }).catch((resp) => {
    console.log(resp);
  });

  this.$scope.search = this.search.bind(this);
  this.$scope.remove = this.remove.bind(this);
  return this;
};

Main.$inject = ['$scope', authorsServiceName];

Main.prototype.search = function (searchTerm: string) {
  this.$scope.authors = this.authorsService.filter(searchTerm);
};

Main.prototype.remove = function (id: number) {
  const $scope = this.$scope;
  this.authorsService.deleteAuthor(id).then((data) => {
    $scope.authors = data;
  }).catch((resp) => {
    console.log(resp);
  });
};

export default Main;
export const name = 'mainCtrl';
