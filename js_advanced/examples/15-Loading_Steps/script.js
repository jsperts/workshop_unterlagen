(function () {
  'use strict';

  console.log('Downloaded and run!');
  var mr = document.getElementById('MR');
  var span = document.createElement('span');
  span.textContent = 'Test';
  mr.parentNode.insertBefore(span, mr);
})();
