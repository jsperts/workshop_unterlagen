(function () {
  'use strict';

  try {
    document.getElementById('test').textContent = 'testDiv';
  } catch (e) {
    console.log('Script2:');
    console.log(e);
  }
})();
