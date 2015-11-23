(function() {
  'use strict';

  try {
    document.getElementById('test').textContent = 'testDiv';
  } catch (e) {
    console.log('Script1:');
    console.log(e);
  }
})();