function startsWith(name: string, searchTerm: string): boolean {
  const subName = name.substr(0, searchTerm.length);
  return subName === searchTerm;
}

class FilterService {
  filterList<T extends {name: string}>(list: Array<T>, searchTerm: string): Array<T> {
    if (searchTerm === '') {
      return list;
    }
    return list.filter((listItem) => {
      const name = listItem.name.toLowerCase();
      return startsWith(name, searchTerm.toLowerCase());
    });
  }
}

export default FilterService;
export const name = 'FilterService';
