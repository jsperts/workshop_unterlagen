function startsWith(name, searchTerm) {
  const subName = name.substr(0, searchTerm.length);
  return subName === searchTerm;
}

class FilterService {
  filterList(list, searchTerm) {
    if (searchTerm === '') {
      return list;
    }
    const filteredList = list.filter((listItem) => {
      const name = listItem.name.toLowerCase();
      return startsWith(name, searchTerm.toLowerCase());
    });
    return filteredList;
  }
}

export default FilterService;
export const name = 'FilterService';
