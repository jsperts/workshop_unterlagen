import * as angular from 'angular';
import 'angular-mocks';
import moduleName from './app.module';

import {Author, name as componentName} from './author.component';

describe('author component', () => {
  let $ctrl: Author;
  const $location = {
    path: jasmine.createSpy('path')
  };
  const id = 1;
  const bindings = {
    removeFn: jasmine.createSpy('removeFn'),
    id
  };

  beforeEach(() => {
    angular.mock.module(moduleName);
    angular.mock.inject((_$rootScope_: angular.IRootScopeService, $componentController: angular.IComponentControllerService) => {
      const $scope = _$rootScope_.$new(true);
      $ctrl = $componentController<Author, {removeFn: jasmine.Spy, id: number}>(componentName, {
        $scope,
        $location
      }, bindings);
    });
  });

  it('should call the bounded removeFn with the given id', () => {
    $ctrl.remove();
    expect(bindings.removeFn).toHaveBeenCalledWith({id});
  });

  it('should pass the correct path to the navigate function', () => {
    $ctrl.navigate();
    expect($location.path).toHaveBeenCalledWith(`/edit/${id}`);
  });
});
