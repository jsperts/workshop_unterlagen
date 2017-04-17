import angular from 'angular';

import {name as componentName} from './author_list.component';

describe('author list component', () => {
  let $ctrl;
  const $location = {
    path: jasmine.createSpy()
  };
  const id = 1;
  const bindings = {
    removeFn: jasmine.createSpy()
  };

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.inject((_$rootScope_, $componentController) => {
      const $scope = _$rootScope_.$new(true);
      $ctrl = $componentController(componentName, {
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
