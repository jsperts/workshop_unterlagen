(function(angular) {
  'use strict';

  var mod = angular.module('httpApp', []);

  // $http konfigurieren
  mod.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.get = {'Accept': 'application/json'};
    $httpProvider.interceptors.push('LoggingService');
  }]);

  function MainCtrl($http) {
    var url = 'http://127.0.0.1:8080/api/v1/movies/';
    var self = this;
    self.movies = [];

    self.getOne = function() {
      var id = 10;
      var httpPromise = $http.get(url + id);

      httpPromise.success(function(data, status, headers, config) {
        self.movies = [data];
        self.status = status;
      });
      httpPromise.error(function(data, status, headers, config) {
        self.status = status;
        self.statusText = '';
      })
    };

    self.getAll = function() {
      var config = {
        method: 'GET',
        url: url
      };

      var httpPromise = $http(config);

      /*
       * response-Objekt
       * config: das Konfigurationsobjekt für die Anfrage
       * data: String | Objekt
       * headers: getter Funktion
       * status: Zahl --> 200 - 299: Serveranfrage erfolgreich. Kein Fehler bei redirects, wird automatisch gefolgt
       * statusText: String
       */
      httpPromise.then(function(response) {
        self.movies = response.data;
        self.status = response.status;
        self.statusText = response.statusText;
      }).catch(function(response) {
        self.status = response.status;
        self.statusText = response.statusText;
      });
    };

    self.addNew = function() {
      var data = {
        title: 'Star Wars Episode IV: A New Hope',
        year: '1977'
      };
      var httpPromise = $http.post(url, data);
      httpPromise.then(function(response){
        self.movies.push(response.data);
      }).catch(function(response) {
        console.log('Error!');
      });
    };

    self.updateOne = function() {
      var toUpdate = self.movies[2];
      toUpdate.title = 'I am updated';
      var httpPromise = $http.put(url + toUpdate._id, toUpdate);

      httpPromise.then(function(){
        console.log('Update')
      }).catch(function() {
        console.log('Error')
      });
    }
  }
  MainCtrl.$inject = ['$http'];

  function LoggingService($q) {
    return {
      request: function(config) {
        console.log(config.url, 'was requested with method', config.method);
        return config;
      },
      response: function(response) {
        console.log(response.config.url, 'has returned with method', response.config.method);
        return response;
      },
      responseError: function(response) {
        console.log('response Error for', response.config.url, 'and method', response.config.method);
        // Ohne $q.reject wird success-Funktion von $http aufgerufen
        return $q.reject(response);
      }
    };
  }
  LoggingService.$inject = ['$q'];

  mod.controller('MainCtrl', MainCtrl);
  mod.factory('LoggingService', LoggingService);
})(angular);
