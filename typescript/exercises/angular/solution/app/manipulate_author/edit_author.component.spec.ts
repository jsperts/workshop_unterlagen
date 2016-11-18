import *  as angular from 'angular';
import 'angular-mocks';
import moduleName from './manipulate_author.module';

import {AuthorWithID} from '../common/interfaces/author';

import {EditAuthor, name as componentName} from './edit_author.component';
import {name as authorsServiceName} from '../common/authors.service';

describe('edit author component', () => {
  let $ctrl: EditAuthor;
  const $location = {
    path: jasmine.createSpy('path')
  };
  const id = 1;
  const $routeParams = {
    id: String(id)
  };
  const author: AuthorWithID = {
    _id: id,
    name: 'Dummy Author',
    birthYear: 1500,
    books: []
  };
  const authorsService = {
    updateAuthor() {
      return {
        then(cb: () => void) {
          cb();
          return {
            catch() {}
          };
        }
      };
    },
    getAuthor() {
      return {
        then(cb: (d: AuthorWithID) => void) {
          cb(author);
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
      spyOn(authorsService, 'updateAuthor').and.callThrough();
      spyOn(authorsService, 'getAuthor').and.callThrough();
      $ctrl = $componentController<EditAuthor, {}>(componentName, {
        $scope,
        $location,
        $routeParams,
        [authorsServiceName]: authorsService
      });
    });
  });

  describe('$onInit', () => {
    it('should call the getAuthor method of the authorsService with the id in route params', () => {
      $ctrl.$onInit();
      expect(authorsService.getAuthor).toHaveBeenCalledWith(id);
    });

    it('should copy the author object received from the authorsService', () => {
      $ctrl.$onInit();
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
