(function(angular) {
  'use strict';

  var mod = angular.module('moviesApp', []);

  function MainCtrl(MoviesService) {
    var self = this;
    self.movies = [];
    self.error = '';

    var promise = MoviesService.getMany(['id1', 'id2', 'id3'])

    promise.then(function(data) {
      self.movies = data;
    }).catch(function(error) {
      self.error = error.message;
    });
  }

  MainCtrl.$inject = ['MoviesService'];

  mod.controller('MainCtrl', MainCtrl);
})(angular);
