import angular from 'angular';
import {name as moviesResourceName} from './movies.resource';

class Main {
  constructor(Movies) {
    this.Movies = Movies;
    this.movies = [];
  }

  getAll() {
    this.movies = this.Movies.query({}, (value, responseHeadersFn) => {
      console.log('Value', value);
    }, (response) => {
      this.status = response.status;
      this.statusText = response.statusText;
    });
  }

  getOne(id) {
    const parameters = {
      id: id
    };
    this.movies = [this.Movies.get(parameters, (value, responseHeadersFn) => {
      console.log('Value', value);
    }, (response) => {
      this.status = response.status;
      this.statusText = response.statusText;
    })];
  }

  addNew() {
    const mov = new this.Movies();
    mov.title = 'Star Wars Episode IV: A New Hope';
    mov.year = '1977';
    mov.$save((value, responseHeadersFn) => {
      console.log('Value', value);
      // Pessimistic add
      //this.movies.push(mov);
    }, (response) => {
      this.status = response.status;
      this.statusText = response.statusText;
    });
    // Optimistic add
    this.movies.push(mov);
  }

  updateOne() {
    const toUpdate = this.movies[0];
    // Optimistic update
    toUpdate.title = 'I am updated';
    const params = {id: toUpdate._id};
    toUpdate.$update(params, (value, responseHeadersFn) => {
      console.log('Value', value);
    }, (response) => {
      this.status = response.status;
      this.statusText = response.statusText;
    });
  }
}
Main.$inject = [moviesResourceName];

const component = {
  template: `
    <div>
      <button ng-click="$ctrl.getAll()">Get All</button>
      <button ng-click="$ctrl.getOne(1)">Get One</button>
      <button ng-click="$ctrl.getOne(10)">Get One with error</button>
      <button ng-click="$ctrl.addNew()">Add New</button>
      <button ng-click="$ctrl.updateOne()">Update One</button>
    </div>
    <p>
      <pre>Status: {{$ctrl.status}}</pre>
      <pre>Status Text: {{$ctrl.statusText}}</pre>
    </p>
    <h3>Filme:</h3>
    <ul>
      <li ng-repeat="movie in $ctrl.movies">
        <span>Title: {{movie.title}}</span>
        <span>Year: {{movie.year}}</span>
      </li>
    </ul>
  `,
  controller: Main
};

export default component;
export const name = 'myApp';
