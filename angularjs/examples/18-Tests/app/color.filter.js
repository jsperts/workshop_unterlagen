function colorFilter() {
  return function (array, currentColor) {
    if (currentColor === '' || currentColor === undefined) {
      return array;
    }
    return array.filter(function (elem) {
      return currentColor === elem;
    });
  };
}

export default colorFilter;
export const name = 'colorFilter';
