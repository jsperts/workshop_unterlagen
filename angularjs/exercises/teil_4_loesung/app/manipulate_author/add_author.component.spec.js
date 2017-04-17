import angular from 'angular';

import {name as componentName} from './add_author.component';
import {name as authorsServiceName} from '../common/authors.service';

describe('add author component', () => {
  let $ctrl;
  const $location = {
    path: jasmine.createSpy()
  };
  const authorsService = {
    addAuthor() {
      return {
        then(cb) {
          cb();
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
      spyOn(authorsService, 'addAuthor').and.callThrough();
      $ctrl = $componentController(componentName, {
        $scope,
        $location,
        [authorsServiceName]: authorsService
      });
    });
  });

  it('should call the addAuthor method of the authorsService with the given author', () => {
    const author = {
      name: 'bla'
    };
    $ctrl.submit(author);
    expect(authorsService.addAuthor).toHaveBeenCalledWith(author);
  });

  it('should navigate to / after author was added', () => {
    $ctrl.submit();
    expect($location.path).toHaveBeenCalledWith('/');
  });
});
