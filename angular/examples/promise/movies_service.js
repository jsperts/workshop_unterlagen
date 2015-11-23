(function(angular) {
  'use strict';

  var mod = angular.module('moviesApp');

  function MoviesService($q, movies) {

    function getOne(id) {
      // ES2015 Schreibweise
      var promise = $q(function(resolve, reject) {
        setTimeout(function() {
          if (movies.hasOwnProperty(id)) {
            resolve(movies[id]);
          } else {
            reject(Error('No movies found'));
          }
        }, 1000);
      });
      return promise;

      // Deferred (alte) Schreibweise
      /*var deferred = $q.defer();
      setTimeout(function() {
        if (movies.hasOwnProperty(id)) {
          deferred.resolve(movies[id]);
        } else {
          deferred.reject(Error('No movies found'));
        }
      }, 1000);
      return deferred.promise;*/
    }

    function getMany(ids) {
      var promises = ids.map(function(id) {
        return getOne(id);
      });

      return $q.all(promises);
    }

    return {
      getOne: getOne,
      getMany: getMany
    }
  }

  MoviesService.$inject = ['$q', 'Movies'];

  mod.factory('MoviesService', MoviesService);
})(angular);