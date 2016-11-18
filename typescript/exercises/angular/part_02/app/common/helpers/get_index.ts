// Array.prototype.findIndex wäre besser, braucht aber ein Polyfill
var getIndex = (function() {
  'use strict';
  function getIndex(id, list) {
    for (var i = 0; i < list.length; i++) {
      var value = list[i];
      if (id === value._id) {
        return i;
      }
    }
  }

  return getIndex;
})();
