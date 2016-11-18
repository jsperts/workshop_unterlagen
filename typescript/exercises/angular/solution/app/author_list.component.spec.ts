import * as angular from 'angular';
import 'angular-mocks';
import moduleName from './app.module';

import {AuthorList, name as componentName} from './author_list.component';

describe('author list component', () => {
  let $ctrl: AuthorList;
  const $location = {
    path: jasmine.createSpy('path')
  };
  const id = 1;
  const bindings = {
    removeFn: jasmine.createSpy('removeFn')
  };

  beforeEach(() => {
    angular.mock.module(moduleName);
    angular.mock.inject((_$rootScope_: angular.IRootScopeService, $componentController: angular.IComponentControllerService) => {
      const $scope = _$rootScope_.$new(true);
      $ctrl = $componentController<AuthorList, {removeFn: jasmine.Spy}>(componentName, {
        $scope,
        $location
      }, bindings);
    });
  });

  it('should call the bounded removeFn with the given id', () => {
    $ctrl.remove(id);
    expect(bindings.removeFn).toHaveBeenCalledWith({id});
  });

  it('should pass the correct path to the navigate function', () => {
    $ctrl.navigate();
    expect($location.path).toHaveBeenCalledWith(`/add`);
  });
});
