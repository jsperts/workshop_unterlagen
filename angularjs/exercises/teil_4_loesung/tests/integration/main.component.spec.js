import angular from 'angular';

import {name as componentName, routingTemplate} from '../../app/main.component';
import {name as authorsServiceName} from '../../app/common/authors.service';

describe('main component', () => {
  let element, $scope;
  const dummyAuthor = {
    name: 'Dummy Author',
    books: ['Author for Dummies'],
    _id: 1,
    birthYear: 1500
  };
  const authors = [dummyAuthor];
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
          cb();
          return {
            catch() {}
          };
        }
      };
    }
  };

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.inject((_$rootScope_, $compile, $componentController) => {
      $scope = _$rootScope_.$new(true);
      spyOn(authorsService, 'getAuthors').and.callThrough();
      spyOn(authorsService, 'deleteAuthor').and.callThrough();
      // Setup Main component's controller
      // Needed to avoid real server calls
      $componentController(componentName, {
        $scope,
        [authorsServiceName]: authorsService
      });
      element = $compile(routingTemplate)($scope);
      $scope.$digest();
    });
  });

  it('should have as many author elements in the view as the given authors array', () => {
    const authorElements = element.find('my-author');
    expect(authorElements.length).toBe(authors.length);
  });

  it('should update the authors list when the authors array changes', () => {
    $scope.$ctrl.authors.push({
      name: 'Author 3',
      _id: 2,
      birthYear: 1500,
      books: []
    });
    $scope.$digest();
    const authorElements = element.find('my-author');
    expect(authorElements.length).toBe(2);
  });

  it('should forward the remove call to the main component', () => {
    const authorElements = element.find('my-author');
    const authorElement = angular.element(authorElements[0]);
    authorElement.isolateScope().$ctrl.remove();
    expect(authorsService.deleteAuthor).toHaveBeenCalled();
    expect(authorsService.deleteAuthor.calls.first().args[0]).not.toBeUndefined();
  });

  it('should forward the search call to the main component', () => {
    const searchElement = angular.element(element[0]);
    searchElement.isolateScope().$ctrl.searchTerm = 'a';
    searchElement.isolateScope().$ctrl.search();
    expect(authorsService.filter).toHaveBeenCalledWith('a');
  });
});
