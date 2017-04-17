describe('color Filter', () => {
  let colorFilter;

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.inject(($filter) => {
      colorFilter = $filter('colorFilter');
    });
  });

  const colors = ['red', 'black'];

  it('should return the input array if currentColor is empty', () => {
    const result = colorFilter(colors, '');

    expect(result).toEqual(colors);
  });

  it('should return the input array if currentColor is undefined', () => {
    const result = colorFilter(colors, undefined);

    expect(result).toEqual(colors);
  });

  it('should return an array with the matched currentColor', () => {
    const result = colorFilter(colors, 'red');

    expect(result).toEqual(['red']);
  });
});