import { FilterServiceCtor, FilterServiceInstance } from './interfaces/services';

function startsWith(name: string , searchTerm: string): boolean {
  const subName = name.substr(0, searchTerm.length);
  return subName === searchTerm;
}

const FilterService: FilterServiceCtor = function FilterService(): FilterServiceInstance {
  return this;
};

FilterService.prototype.filterList = function (list: Array<any>, searchTerm: string): Array<any> {
  if (searchTerm === '') {
    return list;
  }
  return list.filter((listItem) => {
    const name = listItem.name.toLowerCase();
    return startsWith(name, searchTerm.toLowerCase());
  });
};

export default FilterService;
export const name = 'FilterService';
