import * as angular from 'angular';
import 'angular-mocks';
import moduleName from './manipulate_author.module';
import {AuthorsForm, name as componentName} from './authors_form.component';

import {Author} from '../common/interfaces/author';

describe('authors form component', () => {
  let $ctrl: AuthorsForm;
  const $location = {
    path: jasmine.createSpy('path')
  };
  const author: Author = {
    name: 'Dummy Author',
    books: [],
    birthYear: 1500
  };
  const bindings = {
    onSubmit: jasmine.createSpy('onSubmit'),
    authorToEdit: author
  };

  beforeEach(() => {
    angular.mock.module(moduleName);
    angular.mock.inject((_$rootScope_: angular.IRootScopeService, $componentController: angular.IComponentControllerService) => {
      const $scope = _$rootScope_.$new(true);
      $ctrl = $componentController<AuthorsForm, {onSubmit: jasmine.Spy, authorToEdit: Author}>(componentName, {
        $scope,
        $location
      }, bindings);
      $ctrl.authorsForm = <angular.IFormController>{};
    });
  });

  describe('submit', () => {
    it('should call the onSubmit function with the author if the form is valid', () => {
      $ctrl.authorsForm.$valid = true;
      $ctrl.submit();
      expect(bindings.onSubmit).toHaveBeenCalledWith({author});
    });
  });

  describe('addBook', () => {
    it('should add the given book title to the array of books and reset the title', () => {
      const bookToAdd = 'addMe';
      $ctrl.bookToAdd = bookToAdd;
      $ctrl.addBook();
      expect($ctrl.authorToEdit.books).toEqual([bookToAdd]);
      expect($ctrl.bookToAdd).toBe('');
    });
  });

  describe('removeBook', () => {
    it('should remove the book with the given index from the books list', () => {
      $ctrl.authorToEdit.books = ['a', 'b'];
      $ctrl.removeBook(1);
      expect($ctrl.authorToEdit.books.length).toBe(1);
      expect($ctrl.authorToEdit.books).toEqual(['a']);
    });
  });

  describe('navigate', () => {
    it('should navigate to /', () => {
      $ctrl.navigate();
      expect($location.path).toHaveBeenCalledWith('/');
    });
  });
});
