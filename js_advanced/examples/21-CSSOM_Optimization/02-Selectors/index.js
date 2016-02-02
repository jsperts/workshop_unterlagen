(function(window) {
  'use strict';
  var perf = window.performance;

  var numOfElements = 10000;
  var container = document.getElementById('container');
  var getLast = document.getElementById('getLast');
  var getNested = document.getElementById('getNested');

  var lastItemId = 'lastItem';
  var lastItemClass = 'last';

  for (var i = 0; i < numOfElements; i++) {
    var div = document.createElement('div');
    container.appendChild(div);
    div.className = 'box';
    if (i === numOfElements - 1) {
      div.id = lastItemId;
      div.className = 'box ' + lastItemClass;
    }
  }

  function printMarksForLast() {
    perf.measure('measure_by_id', 'mark_by_id_start', 'mark_by_id_end');
    perf.measure('measure_by_class', 'mark_by_class_start', 'mark_by_class_end');
    perf.measure('measure_selector_id', 'mark_query_selector_id_start', 'mark_query_selector_id_end');
    perf.measure('measure_selector_class', 'mark_query_selector_class_start', 'mark_query_selector_class_end');
    perf.measure('measure_selector_complex', 'mark_query_selector_complex_start', 'mark_query_selector_complex_end');
    perf.measure('measure_last_child', 'mark_last_child_start', 'mark_last_child_end');

    perf.clearMarks();
    var measures = perf.getEntriesByType('measure');
    var slowest = {duration: Number.MIN_VALUE};
    var fastest = {duration: Number.MAX_VALUE};
    measures.forEach(function(measure) {
      if (measure.duration >= slowest.duration) {
        slowest = measure;
      }
      if (measure.duration <= fastest.duration) {
        fastest = measure;
      }
      console.log(measure.name, measure.duration);
    });
    console.log('Fastest', fastest.name);
    console.log('Slowest', slowest.name);
    perf.clearMeasures();
  }

  getLast.addEventListener('click', function() {
    perf.mark('mark_by_id_start');
    document.getElementById(lastItemId);
    perf.mark('mark_by_id_end');

    perf.mark('mark_by_class_start');
    document.getElementsByClassName(lastItemClass)[0];
    perf.mark('mark_by_class_end');

    perf.mark('mark_query_selector_id_start');
    document.querySelector('#' + lastItemId);
    perf.mark('mark_query_selector_id_end');

    perf.mark('mark_query_selector_class_start');
    document.querySelector('.' + lastItemClass);
    perf.mark('mark_query_selector_class_end');

    perf.mark('mark_query_selector_complex_start');
    document.querySelector('#container > div:last-child');
    perf.mark('mark_query_selector_complex_end');

    perf.mark('mark_last_child_start');
    container.lastElementChild;
    perf.mark('mark_last_child_end');

    printMarksForLast();
  });

  function printMarksForNested() {
    perf.measure('measure_nested', 'mark_nested_start', 'mark_nested_end');
    perf.measure('measure_class', 'mark_class_start', 'mark_class_end');

    perf.clearMarks();
    var measures = perf.getEntriesByType('measure');
    var slowest = {duration: Number.MIN_VALUE};
    var fastest = {duration: Number.MAX_VALUE};
    measures.forEach(function(measure) {
      if (measure.duration >= slowest.duration) {
        slowest = measure;
      }
      if (measure.duration <= fastest.duration) {
        fastest = measure;
      }
      console.log(measure.name, measure.duration);
    });
    console.log('Fastest', fastest.name);
    console.log('Slowest', slowest.name);
    perf.clearMeasures();
  }

  getNested.addEventListener('click', function() {
    perf.mark('mark_class_start');
    document.querySelector('.nested');
    perf.mark('mark_class_end');

    perf.mark('mark_nested_start');
    document.querySelector('div div span a.nested');
    perf.mark('mark_nested_end');

    printMarksForNested();
  });
})(window);