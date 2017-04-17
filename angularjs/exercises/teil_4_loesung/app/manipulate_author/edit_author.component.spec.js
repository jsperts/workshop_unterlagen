import angular from 'angular';

import {name as componentName} from './edit_author.component';
import {name as authorsServiceName} from '../common/authors.service';

describe('edit author component', () => {
  let $ctrl;
  const $location = {
    path: jasmine.createSpy()
  };
  const id = 1;
  const $routeParams = {
    id: String(id)
  };
  const author = {
    _id: id,
    name: 'Dummy Author',
    birthYear: 1500,
    books: []
  };
  const authorsService = {
    updateAuthor() {
      return {
        then(cb) {
          cb();
          return {
            catch() {}
          };
        }
      };
    },
    getAuthor() {
      return {
        then(cb) {
          cb(author);
          return {
            catch() {}
          };
        }
      };
    }
  };

  beforeEach(() => {
    angular.mock.module('app.manipulate_author');
    angular.mock.inject((_$rootScope_, $componentController) => {
      const $scope = _$rootScope_.$new(true);
      spyOn(authorsService, 'updateAuthor').and.callThrough();
      spyOn(authorsService, 'getAuthor').and.callThrough();
      $ctrl = $componentController(componentName, {
        $scope,
        $location,
        $routeParams,
        [authorsServiceName]: authorsService
      });
    });
  });

  describe('constructor', () => {
    it('should call the getAuthor method of the authorsService with the id in route params', () => {
      expect(authorsService.getAuthor).toHaveBeenCalledWith(id);
    });

    it('should copy the author object received from the authorsService', () => {
      expect($ctrl.author).not.toBe(author);
    });
  });

  describe('submit', () => {
    it('should call the updateAuthor method of the authorsService with the given author', () => {
      $ctrl.submit(author);
      expect(authorsService.updateAuthor).toHaveBeenCalledWith(author);
    });

    it('should navigate to / after the author was updated', () => {
      $ctrl.submit(author);
      expect($location.path).toHaveBeenCalledWith('/');
    });
  });
});
