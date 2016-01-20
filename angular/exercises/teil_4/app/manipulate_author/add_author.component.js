import angular from 'angular';
import {name as authorsServiceName} from '../common/authors.service';

const authorTemplate = {
  name: '',
  birthYear: 1950,
  books: []
};

class AddAuthor {
  constructor(authorsService, $location) {
    this.author = angular.copy(authorTemplate);
    this.authorsService = authorsService;
    this.$location = $location;
  }

  submit(newAuthor) {
    this.authorsService.addAuthor(newAuthor).then(() => {
      this.$location.path('/');
    }).catch((resp) => {
      console.log(resp);
    });
  }
}
AddAuthor.$inject = [authorsServiceName, '$location'];

const component = {
  template: `<my-authors-form title="Add Author" author="$ctrl.author" on-submit="$ctrl.submit(author)"></my-authors-form>`,
  controller: AddAuthor
};

export default component;
export const name = 'myAddAuthor';
