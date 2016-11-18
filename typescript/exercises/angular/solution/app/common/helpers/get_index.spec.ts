import getIndex from './get_index';

describe('getIndex', () => {
  const list = [{_id: 1}, {_id: 2}, {_id: 4}];

  it('should get an array and an id and return the index of the element with the given _id property', () => {
    const index = getIndex(1, list);
    expect(index).toBe(0);
  });

  it('should return undefined if no element matches the given id', () => {
    const index = getIndex(10, list);
    expect(index).toBeUndefined();
  });
});
