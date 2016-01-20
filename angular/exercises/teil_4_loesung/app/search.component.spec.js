import angular from 'angular';
import {name as componentName} from './search.component';

describe('search component', () => {
  let $ctrl;
  const searchTerm = 'searchTerm';
  const bindings = {
    onSearch: jasmine.createSpy()
  };

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.inject((_$rootScope_, $componentController) => {
      const $scope = _$rootScope_.$new(true);
      $ctrl = $componentController(componentName, {
        $scope
      }, bindings);
    });
  });

  it('should call the onSearch function with the given search term', () => {
    $ctrl.searchTerm = searchTerm;
    $ctrl.search();
    expect(bindings.onSearch).toHaveBeenCalledWith({searchTerm});
  });
});
