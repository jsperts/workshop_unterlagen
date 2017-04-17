function rejectFn($q) {
  return $q((resolve, reject) => {
    setTimeout(function () {
      reject(Error('No data'));
    }, 2000);
  });
}

export default ['$q', rejectFn];
export const name = 'rejectFactory';
