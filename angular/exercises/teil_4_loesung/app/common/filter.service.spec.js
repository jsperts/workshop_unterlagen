import angular from 'angular';

describe('filter service', () => {
  let filterService;

  const dummyAuthor1 = {
    name: 'Agatha'
  };
  const dummyAuthor2 = {
    name: 'Jane'
  };
  const dummyAuthor3 = {
    name: 'John'
  };
  const dummyData = [dummyAuthor1, dummyAuthor2, dummyAuthor3];

  beforeEach(() => {
    angular.mock.module('app.common');
    angular.mock.inject((_FilterService_) => {
      filterService = _FilterService_;
    });
  });

  it('should return the given list when the searchTerm is empty', () => {
    const result = filterService.filterList(dummyData, '');
    expect(result).toBe(dummyData);
  });

  it('should return a list with only matching names when the searchTerm is not empty', () => {
    const result = filterService.filterList(dummyData, 'J');
    expect(result).toEqual([dummyAuthor2, dummyAuthor3]);
  });

  it('be case insensitive', () => {
    const result = filterService.filterList(dummyData, 'jA');
    expect(result).toEqual([dummyAuthor2]);
  });

  it('should return an empty list if no name matches', () => {
    const result = filterService.filterList(dummyData, 'b');
    expect(result).toEqual([]);
  });
});
