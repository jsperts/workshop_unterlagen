import {name as moviesServiceName} from './movies.service';

class Main {
  constructor(moviesService) {
    this.movies = [];
    this.error = '';
    this.moviesService = moviesService;
  }

  getMany() {
    const promise = this.moviesService.getMany(['id1', 'id2', 'id3']);

    promise.then((data) => {
      this.movies = data;
    }).catch((error) => {
      this.error = error.message;
    });
  }

  getOne(id) {
    const promise = this.moviesService.getOne(id);

    promise.then((data) => {
      this.movies = [data];
    }).catch((error) => {
      this.error = error.message;
    });
  }
}

Main.$inject = [moviesServiceName];

const component = {
  template: `
    <button ng-click="$ctrl.getMany()">Get many</button>
    <button ng-click="$ctrl.getOne('id3')">Get one</button>
    <button ng-click="$ctrl.getOne('id4')">Get one with error</button>
    <p>
      Fehler: {{$ctrl.error}}
    </p>
    <h3>Filme:</h3>
    <ul>
      <li ng-repeat="movie in $ctrl.movies track by movie.id">
        <span>Title: {{movie.title}}</span>
        <span>Year: {{movie.year}}</span>
      </li>
    </ul>
  `,
  controller: Main
};

export default component;
export const name = 'myApp';
