import * as angular from 'angular';
import 'angular-mocks';
import moduleName from './app.module';

import {Search, name as componentName} from './search.component';

describe('search component', () => {
  let $ctrl: Search;
  const searchTerm = 'searchTerm';
  const bindings = {
    onSearch: jasmine.createSpy('onSearch')
  };

  beforeEach(() => {
    angular.mock.module(moduleName);
    angular.mock.inject((_$rootScope_: angular.IRootScopeService, $componentController: angular.IComponentControllerService) => {
      const $scope = _$rootScope_.$new(true);
      $ctrl = $componentController<Search, {onSearch: jasmine.Spy}>(componentName, {
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
