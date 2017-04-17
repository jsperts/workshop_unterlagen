import {name as componentName} from './color_selector.component';
import {name as serviceName} from './send_to_server.service';

describe('colorSelector Controller', () => {
  let $ctrl;

  const bindings = {};

  const sendToServer = {
    send() {
      return {
        then() {}
      };
    }
  };

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.module('app/color_selector.component.html');
    angular.mock.inject(($componentController, _$rootScope_) => {
      const $scope = _$rootScope_.$new(true);

      $ctrl = $componentController(componentName, {
        $scope,
        [serviceName]: sendToServer
      }, bindings);
      spyOn(sendToServer, 'send').and.callThrough();
    });
  });

  it('should call send with the current color', () => {
    $ctrl.currentColor = 'newColor';

    $ctrl.send();

    expect(sendToServer.send).toHaveBeenCalledWith('newColor');
  });

  describe('view test', () => {
    let elem;
    beforeEach(() => {
      angular.mock.inject(($compile, _$rootScope_) => {
        const $scope = _$rootScope_.$new(true);
        elem = $compile('<color-selector></color-selector>')($scope);
        $scope.$digest();
      });
    });

    it('should contain 5 divs', () => {
      expect(elem.find('div').length).toBe(5)
    });

    it('should call the send function of the controller on button click', () => {
      spyOn(elem.controller('colorSelector'), 'send');
      elem.find('button').triggerHandler('click');
      expect(elem.controller('colorSelector').send).toHaveBeenCalled()
    });
  });
});
