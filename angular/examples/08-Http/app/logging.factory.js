function logging($q) {

  return {
    request(config) {
      console.log(config.url, 'was requested with method', config.method);
      return config;
    },

    response(response) {
      console.log(response.config.url, 'has returned with method', response.config.method);
      return response;
    },

    responseError(response) {
      console.log('response Error for', response.config.url, 'and method', response.config.method);
      // Ohne $q.reject wird der $http-Aufruf erfolgreich sein
      return $q.reject(response);
    }
  }
}
logging.$inject = ['$q'];

export default logging;
export const name = 'loggingFactory';
