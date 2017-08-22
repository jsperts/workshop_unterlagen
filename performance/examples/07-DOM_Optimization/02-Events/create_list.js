(function () {
  'use strict';

  var numOfElements = 10000;
  var list = document.getElementById('container');

  for (var i = 0; i < numOfElements; i++) {
    var li = document.createElement('li');
    list.appendChild(li);
    li.textContent = i;
  }
})();
