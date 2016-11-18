function startsWith(name, searchTerm) {
  var subName = name.substr(0, searchTerm.length);
  return subName === searchTerm;
}

function FilterService() {}

FilterService.prototype.filterList = function (list, searchTerm) {
  if (searchTerm === '') {
    return list;
  }
  return list.filter(function (listItem) {
    var name = listItem.name.toLowerCase();
    return startsWith(name, searchTerm.toLowerCase());
  });
};

export default FilterService;
export var name = 'FilterService';
