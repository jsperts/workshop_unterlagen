(function(angular) {
  'use strict';

  // ngResource als Abhängigkeit deklarieren
  var mod = angular.module('ngResourceApp', ['ngResource']);

  function MainCtrl(Movies) {

    var self = this;
    self.movies = [];

    self.getOne = function() {
      var id = 1;
      var parameters = {
        id: id
      };
      self.movies = [Movies.get(parameters, angular.noop, function(){
        console.log('Error!')
      })];
    };

    self.getAll = function() {
      self.movies = Movies.query({}, angular.noop, function(){
        console.log('Error!')
      });
    };

    self.addNew = function() {
      var mov = new Movies();
      mov.title = 'Star Wars Episode IV: A New Hope';
      mov.year = '1977';
      mov.$save(function(data, responseHeaders){
        console.log(data);
        console.log(responseHeaders);
        self.movies.push(mov);
      }, function(httpResponse) {
        console.log('Error!');
      });
    };

    self.updateOne = function() {
      var toUpdate = self.movies[2];
      toUpdate.title = 'I am updated';
      var params = {id: toUpdate._id};
      toUpdate.$update(params, function(){
        console.log('Update')
      }, function() {
        console.log('Error')
      });
    }
  }
  MainCtrl.$inject = ['Movies'];

  function Movies($resource) {
    var url = 'http://127.0.0.1:8080/api/v1/movies/:id';
    var paramDefaults = {
      id: '@id'
    };
    var actions = {
      update: {method: 'PUT'}
    };
    var moviesResource = $resource(url, paramDefaults, actions);
    return moviesResource;
  }

  mod.controller('MainCtrl', MainCtrl);
  mod.factory('Movies', Movies);
})(angular);
