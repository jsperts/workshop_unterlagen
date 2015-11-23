(function(window) {
  'use strict';
  var perf = window.performance;

  var addRemove = document.getElementById('add_remove');
  var addRemoveInnerHTML = document.getElementById('add_remove_inner_html');
  var rearrange = document.getElementById('rearrange');

  var numOfElements = 10000;
  var list = document.getElementById('container');

  function createLi(name) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    var div = document.createElement('div');
    a.textContent = 'Click me!';
    div.appendChild(a);
    var span = document.createElement('span');
    var strong = document.createElement('strong');
    strong.textContent = 'Name: ';
    span.appendChild(strong);
    var spanText = document.createTextNode(name);
    span.appendChild(spanText);

    li.appendChild(div);
    li.appendChild(span);
    return li;
  }

  for (var i = 0; i < numOfElements; i++) {
    var li = createLi(i);
    list.appendChild(li);
  }

  addRemove.addEventListener('click', function() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    for (var i = numOfElements - 1; i >= 0; i--) {
      var li = createLi(i);
      list.appendChild(li);
    }
  });

  addRemoveInnerHTML.addEventListener('click', function() {
    var str = '';
    for (var i = numOfElements - 1; i >= 0; i--) {
      str += '<li><div><a>Click me!</a></div><span><strong>Name: </strong>' + i + '</span></li>';
    }
    list.innerHTML = str;
  });

  rearrange.addEventListener('click', function clickCallback() {
    //var spans = [].slice.call(list.getElementsByTagName('span'));
    var spans = list.getElementsByTagName('span');
    var spansLength = spans.length - 1;
    for (var i = spansLength; i >= 0; i--) {
      /*spans[i].removeChild(spans[i].lastChild);
      spans[i].appendChild(document.createTextNode(spansLength - i));*/

      /*spans[i].innerHTML = '<strong>Name: </strong>' + (spansLength - i);*/

      spans[i].childNodes[1].textContent = spansLength - i;

      /* spans[i].lastChild.textContent = spansLength - i; */
    }
  });
})(window);