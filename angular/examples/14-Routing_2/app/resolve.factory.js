function resolveFn($q) {
  return $q((resolve, reject) => {
    setTimeout(function () {
      resolve('Meine Daten');
    }, 2000);
  });
}

export default ['$q', resolveFn];
export const name = 'resolveFactory';
