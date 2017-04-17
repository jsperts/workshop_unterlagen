class Main {
  constructor($http) {
    this.url = 'http://127.0.0.1:8081/api/v1/movies/';
    this.movies = [];
    this.$http = $http;
  }

  getAll() {
    const config = {
      method: 'GET',
      url: this.url
    };

    const httpPromise = this.$http(config);

    /*
     * response-Objekt
     * config: das Konfigurationsobjekt für die Anfrage
     * data: String | Objekt
     * headers: getter Funktion
     * status: Zahl --> 200 - 299: Serveranfrage erfolgreich. Kein Fehler bei redirects, wird automatisch gefolgt
     * statusText: String
     */
    httpPromise.then((response) => {
      this.movies = response.data;
      this.status = response.status;
      this.statusText = response.statusText;
    }).catch((response) => {
      this.status = response.status;
      this.statusText = response.statusText;
    });
  }

  getOne(id) {
    const httpPromise = this.$http.get(`${this.url}${id}`);

    httpPromise.then((response) => {
      this.movies = [response.data];
      this.status = response.status;
    }).catch((response) => {
      this.status = response.status;
      this.statusText = response.statusText;
    });
  }

  addNew() {
    const data = {
      title: 'Star Wars Episode IV: A New Hope',
      year: '1977'
    };

    function transformReq(data, headersGetter) {
      console.log(data);
      return JSON.stringify(data);
    }

    function transformResp(data, headersGetter, status) {
      console.log(data);
      return JSON.parse(data);
    }

    const httpPromise = this.$http.post(this.url, data, {
      transformRequest: transformReq,
      transformResponse: transformResp
    });

    httpPromise.then((response) => {
      this.movies.push(response.data);
    }).catch((response) => {
      console.log('Error!');
    });
  }

  updateOne() {
    const toUpdate = this.movies[0];
    toUpdate.title = 'I am updated';
    const httpPromise = this.$http.put(`${this.url}${toUpdate._id}`, toUpdate);

    httpPromise.then(() => {
      console.log('Update')
    }).catch(() => {
      console.log('Error')
    });
  }
}
Main.$inject = ['$http'];

const component = {
  template: `
    <div>
      <button ng-click="$ctrl.getAll()">Get All</button>
      <button ng-click="$ctrl.getOne(2)">Get One</button>
      <button ng-click="$ctrl.getOne(10)">Get One with error</button>
      <button ng-click="$ctrl.addNew()">Add New</button>
      <button ng-click="$ctrl.updateOne()">Update One</button>
    </div>
    <div>
      <pre>Status: {{$ctrl.status}}</pre>
      <pre>Status Text: {{$ctrl.statusText}}</pre>
    </div>
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
