import * as angular from 'angular';
import 'angular-mocks';
import moduleName from './app.module';

import {Main, name as componentName} from './main.component';
import {name as authorsServiceName} from './common/authors.service';

import {AuthorWithID} from './common/interfaces/author';

describe('main component', () => {
  let $ctrl: Main;
  const authors: Array<AuthorWithID> = [{
    name: 'a',
    birthYear: 1950,
    books: [],
    _id: 1
  }, {
    name: 'b',
    birthYear: 1950,
    books: [],
    _id: 1
  }];
  const deletedAuthors: Array<AuthorWithID> = [{
    name: 'a',
    birthYear: 1950,
    books: [],
    _id: 1
  }];
  const authorsService = {
    getAuthors() {
      return {
        then(cb: (d: Array<AuthorWithID>) => void) {
          cb(authors);
          return {
            catch() {}
          };
        }
      };
    },
    filter: jasmine.createSpy('filter'),
    deleteAuthor() {
      return {
        then(cb: (d: Array<AuthorWithID>) => void) {
          cb(deletedAuthors);
          return {
            catch() {}
          };
        }
      };
    }
  };

  beforeEach(() => {
    angular.mock.module(moduleName);
    angular.mock.inject((_$rootScope_: angular.IRootScopeService, $componentController: angular.IComponentControllerService) => {
      const $scope = _$rootScope_.$new(true);
      spyOn(authorsService, 'getAuthors').and.callThrough();
      spyOn(authorsService, 'deleteAuthor').and.callThrough();
      $ctrl = $componentController<Main, {}>(componentName, {
        $scope,
        [authorsServiceName]: authorsService
      });
    });
  });

  describe('constructor', () => {
    it('should call the getAuthors method of the authorsService', () => {
      expect(authorsService.getAuthors).toHaveBeenCalled();
    });

    it('should put the authors in the instance', () => {
      expect($ctrl.authors).toEqual(authors);
    });
  });

  it('should call the filter method of the authors service with the given search term', () => {
    const searchTerm = 'testing';
    $ctrl.search(searchTerm);
    expect(authorsService.filter).toHaveBeenCalledWith(searchTerm);
  });

  describe('remove', () => {
    it('should call the deleteAuthor method of the authorsService with the given id', () => {
      const id = 1;
      $ctrl.remove(id);
      expect(authorsService.deleteAuthor).toHaveBeenCalledWith(id);
    });

    it('should put the authors in the instance', () => {
      const id = 2;
      $ctrl.remove(id);
      expect($ctrl.authors).toEqual(deletedAuthors);
    });
  });
});
