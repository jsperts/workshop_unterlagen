import * as angular from 'angular';
import 'angular-mocks';
import moduleName from './manipulate_author.module';

import {AddAuthor, name as componentName} from './add_author.component';
import {name as authorsServiceName} from '../common/authors.service';

import {Author} from '../common/interfaces/author';

import IRootScopeService = angular.IRootScopeService;
import IComponentControllerService = angular.IComponentControllerService;

describe('add author component', () => {
  let $ctrl: AddAuthor;
  const $location = {
    path: jasmine.createSpy('path')
  };
  const authorsService = {
    addAuthor() {
      return {
        then(cb: () => void) {
          cb();
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
      spyOn(authorsService, 'addAuthor').and.callThrough();
      $ctrl = $componentController<AddAuthor, {}>(componentName, {
        $scope,
        $location,
        [authorsServiceName]: authorsService
      });
    });
  });

  it('should call the addAuthor method of the authorsService with the given author', () => {
    const author: Author = {
      name: 'bla',
      books: [],
      birthYear: 1960
    };
    $ctrl.submit(author);
    expect(authorsService.addAuthor).toHaveBeenCalledWith(author);
  });

  it('should navigate to / after author was added', () => {
    const author: Author = {
      name: 'bla',
      books: [],
      birthYear: 1960
    };
    $ctrl.submit(author);
    expect($location.path).toHaveBeenCalledWith('/');
  });
});
