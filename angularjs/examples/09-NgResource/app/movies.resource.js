function movies($resource) {
  const url = 'http://127.0.0.1:8081/movies/:id';
  const paramDefaults = {
    id: '@id'
  };
  const actions = {
    update: {method: 'PUT'}
  };
  return $resource(url, paramDefaults, actions);
}

export default ['$resource', movies];
export const name = 'Movies';
