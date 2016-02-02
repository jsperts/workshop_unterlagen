(function(window) {
  'use strict';
  var perf = window.performance;

  var addRemove = document.getElementById('add_remove');
  var addRemoveInnerHTML = document.getElementById('add_remove_inner_html');
  var rearrange = document.getElementById('rearrange');

  var numOfElements = 10000;
  var list = document.getElementById('container');

  for (var i = 0; i < numOfElements; i++) {
    var li = document.createElement('li');
    list.appendChild(li);
    li.textContent = i;
  }

  addRemove.addEventListener('click', function() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    for (var i = numOfElements - 1; i >= 0; i--) {
      var li = document.createElement('li');
      list.appendChild(li);
      li.textContent = i;
    }
  });

  addRemoveInnerHTML.addEventListener('click', function() {
    var str = '';
    for (var i = numOfElements - 1; i >= 0; i--) {
      str += '<li>' + i + '</li>';
    }
    list.innerHTML = str;
  });

  rearrange.addEventListener('click', function() {
    var next = list.firstChild;
    var i = numOfElements - 1;
    while (next) {
      // Only set the text of element nodes
      if (next.nodeType === 1) {
        next.textContent = i;
        i--;
      }
      next = next.nextSibling;
    }
  });
})(window);