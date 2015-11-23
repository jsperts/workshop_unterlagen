(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var serviceName = 'FilterService';

  function FilterService() {
    function startsWith(name, searchTerm) {
      var subName = name.substr(0, searchTerm.length);
      return subName === searchTerm;
    }

    // list: the list of authors
    // searchTerm: the value of the search input field
    function filterList(list, searchTerm) {
      if (searchTerm === '') {
        return list;
      }
      var filteredList = list.filter(function(listItem) {
        var name = listItem.name.toLowerCase();
        return startsWith(name, searchTerm);
      });
      return filteredList;
    }

    return {
      getFilteredList: filterList
    };
  }

  mod.factory(serviceName, FilterService);
})(angular, window.MY_APP_MODULE_NAME);
