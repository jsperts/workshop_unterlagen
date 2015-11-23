(function() {
  'use strict';

  describe('color Filter', function() {
    var colorFilter;

    beforeEach(function() {
      module('testApp');
      inject(function($filter) {
        colorFilter = $filter('colorFilter');
      });
    });

    var colors = ['red', 'black'];

    it('should return the input array if currentColor is empty', function() {
      var result = colorFilter(colors, '');

      expect(result).toEqual(colors);
    });

    it('should return an array with the matched currentColor', function() {
      var result = colorFilter(colors, 'red');

      expect(result).toEqual(['red']);
    });
  });

})();
