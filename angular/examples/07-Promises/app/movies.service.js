const movies = {
  id1: {id: 'id1', title: 'Terminator', year: '1984'},
  id2: {id: 'id2', title: 'Resident Evil', year: '2002'},
  id3: {id: 'id3', title: 'Police Academy', year: '1984'}
};

class Movies {
  constructor($q) {
    this.$q = $q;
    this.movies = movies;
  }

  getOne(id) {
    return this.$q((resolve, reject) => {
      setTimeout(() => {
        if (this.movies.hasOwnProperty(id)) {
          resolve(this.movies[id]);
        } else {
          reject(Error('Movie not found'));
        }
      }, 1000);
    });
  }

  getMany(ids) {
    const promises = ids.map((id) => {
      return this.getOne(id);
    });

    return this.$q.all(promises);
  }
}
Movies.$inject = ['$q'];

export default Movies;
export const name = 'MoviesService';
