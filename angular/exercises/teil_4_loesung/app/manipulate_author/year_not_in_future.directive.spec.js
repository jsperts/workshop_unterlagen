import angular from 'angular';

describe('yearNotInFuture directive', () => {
  let $scope;
  const formName = 'testForm';
  const inputName = 'testInput';
  const html = `
    <form name="${formName}">
      <input name="${inputName}" type="number" my-year-not-in-future ng-model="obj.year"/>
    </form>
  `;

  beforeEach(() => {
    angular.mock.module('app.manipulate_author');
    angular.mock.inject(($compile, _$rootScope_) => {
      $scope = _$rootScope_.$new();
      $scope.obj = {};

      $compile(html)($scope);
      $scope.$digest();
    });
  });

  it('should set the yearInFuture error if the given year is in the future', () => {
    $scope.obj.year = 12222;
    $scope.$digest();

    const expectedErrorObj = {
      yearInFuture: true
    };

    expect($scope[formName][inputName].$error).toEqual(expectedErrorObj);
  });

  it('should set the error object to empty if the given year is not in the future', () => {
    $scope.obj.year = 122;
    $scope.$digest();

    expect($scope[formName][inputName].$error).toEqual({});
  });
});
