import angular from 'angular';
import {name as authorsServiceName} from '../common/authors.service';

class EditAuthor {
  constructor(authorsService, $routeParams, $location) {
    this.authorsService = authorsService;
    const id = Number($routeParams.id);
    this.authorsService.getAuthor(id).then((author) => {
      this.author = angular.copy(author);
    }).catch((resp) => {
      console.log(resp);
    });
    this.$location = $location;
  }

  submit(authorToUpdate) {
    this.authorsService.updateAuthor(authorToUpdate).then(() => {
      this.$location.path('/');
    }).catch((resp) => {
      console.log(resp);
    });
  }
}
EditAuthor.$inject = [authorsServiceName, '$routeParams', '$location'];

const component = {
  template: `<my-authors-form title="Edit Author" author="$ctrl.author" on-submit="$ctrl.submit(author)"></my-authors-form>`,
  controller: EditAuthor
};

export default component;
export const name = 'myEditAuthor';
