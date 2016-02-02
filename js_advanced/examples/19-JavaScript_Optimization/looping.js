(function(window) {
  'use strict';
  var perf = window.performance;

  function prepareArray() {
    var iterations = 1000000;
    var array = [];
    array[0] = {
      predicate: true
    };
    for (var i = 1; i < iterations; i++) {
      array[i] = {
        predicate: false
      };
    }
    return array;
  }

  // Achtung: die zwei Funktionen können unterschiedliche Resultate liefern!
  function mapThenFilter(doneFn) {
    var array = prepareArray();
    perf.mark('mark_start');
    array.map(function(elem, index) {
      return elem.name = index;
    }).filter(function(elem) {
      return elem.predicate;
    });
    perf.mark('mark_end');
    doneFn('mapThenFilter');
  }

  function filterThenMap(doneFn) {
    var array = prepareArray();
    perf.mark('mark_start');
    array.filter(function(elem) {
      return elem.predicate;
    }).map(function(elem, index) {
      return elem.name = index;
    });
    perf.mark('mark_end');
    doneFn('filterThenMap');
  }

  window.l = {
    filterThenMap: filterThenMap,
    mapThenFilter: mapThenFilter
  };
})(window);