function startsWith(name: string , searchTerm: string): boolean {
  const subName = name.substr(0, searchTerm.length);
  return subName === searchTerm;
}

function FilterService() {}

FilterService.prototype.filterList = function (list: Array<any>, searchTerm: string): Array<any> {
  if (searchTerm === '') {
    return list;
  }
  return list.filter(function (listItem) {
    const name = listItem.name.toLowerCase();
    return startsWith(name, searchTerm.toLowerCase());
  });
};

export default FilterService;
export const name = 'FilterService';
