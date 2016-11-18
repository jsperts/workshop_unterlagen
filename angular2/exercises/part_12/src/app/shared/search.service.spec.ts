import { SearchService } from './search.service';

describe('SearchService', () => {
  let uut: SearchService;

  beforeEach(() => {
    uut = new SearchService();
  });

  it('should get a queryString and an array and return an array with object having a name starting with queryString', () => {
    const queryString = 'abc';
    const array = [{ name: 'abcdef' }, { name: 'cfeg' }];

    const res = uut.search(queryString, array);
    expect(res.length).toBe(1);
    expect(res[0].name).toBe(array[0].name);
  });

  it('should be case sensitive', () => {
    const queryString = 'Abc';
    const array = [{ name: 'abcdef' }, { name: 'cfeg' }];

    const res = uut.search(queryString, array);
    expect(res.length).toBe(0);
  });
});
