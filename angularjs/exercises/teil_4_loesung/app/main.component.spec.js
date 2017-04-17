import angular from 'angular';

import {name as componentName} from './main.component';
import {name as authorsServiceName} from './common/authors.service';

describe('main component', () => {
  let $ctrl;
  const authors = ['a', 'b'];
  const deletedAuthors = ['a'];
  const authorsService = {
    getAuthors() {
      return {
        then(cb) {
          cb(authors);
          return {
            catch() {}
          };
        }
      };
    },
    filter: jasmine.createSpy(),
    deleteAuthor() {
      return {
        then(cb) {
          cb(deletedAuthors);
          return {
            catch() {}
          };
        }
      };
    }
  };

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.inject((_$rootScope_, $componentController) => {
      const $scope = _$rootScope_.$new(true);
      spyOn(authorsService, 'getAuthors').and.callThrough();
      spyOn(authorsService, 'deleteAuthor').and.callThrough();
      $ctrl = $componentController(componentName, {
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
      const id = 'testID';
      $ctrl.remove(id);
      expect(authorsService.deleteAuthor).toHaveBeenCalledWith(id);
    });

    it('should put the authors in the instance', () => {
      const id = 'testID';
      $ctrl.remove(id);
      expect($ctrl.authors).toEqual(deletedAuthors);
    });
  });
});
