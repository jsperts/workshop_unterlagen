(function() {
  'use strict';

  describe('colorSelector Controller', function() {
    var ctrl, SendToServer;

    beforeEach(function() {
      module('testApp');
      inject(function($controller, _SendToServer_) {
        SendToServer = _SendToServer_;
        ctrl = $controller('colorSelectorCtrl', {
          SendToServer: _SendToServer_
        });
        spyOn(SendToServer, 'send');
      });
    });

    it('should call send with the current color', function() {
      ctrl.currentColor = 'newColor';

      ctrl.send();

      expect(SendToServer.send).toHaveBeenCalledWith('newColor');
    });
  });
})();
