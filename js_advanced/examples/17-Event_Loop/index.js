(function (window) {
  'use strict';
  var perf = window.performance;

  var runButtonSimple = document.getElementById('runSimple');
  var contents = document.getElementById('content');

  function addToDOM(content) {
    var li = document.createElement('li');
    li.textContent = content.join(' ');
    contents.appendChild(li);
  }

  function resetContent() {
    while (contents.firstChild) {
      contents.removeChild(contents.firstChild);
    }
  }

  function doneFn() {
    var marks = perf.getEntriesByType('mark');
    var len = marks.length;
    var markStart = marks[0];
    for (var i = 1; i < len; i++) {
      var markB = marks[i];
      perf.measure('t' + i, markStart.name, markB.name);
    }
    addToDOM(['t0', 0, 'ms']);
    var measures = perf.getEntriesByType('measure');
    measures.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    }).forEach(function (measure) {
      addToDOM([measure.name, measure.duration, 'ms']);
    });

    perf.clearMarks();
    perf.clearMeasures();
  }

  runButtonSimple.addEventListener('click', function () {
    resetContent();
    window.runSimple(doneFn);
  });
})(window);
