(function(angular) {
  'use strict';

  var movies = {
    id1: {id: 'id1', title: 'Terminator', year: '1984'},
    id2: {id: 'id2', title: 'Resident Evil', year: '2002'},
    id3: {id: 'id3', title: 'Police Academy', year: '1984'}
  };

  angular.module('moviesApp').value('Movies', movies);
})(angular);