import getIndex from './helpers/get_index.js';
import {name as filterServiceName} from './filter.service';

class AuthorsService {
  constructor(filterService, $http, $q) {
    this.baseUrl = 'http://127.0.0.1:8081/api/v1/author/';
    this.filterService = filterService;
    this.$http = $http;
    this.$q = $q;
    this.data = [];
  }

  addAuthor(author) {
    return this.$http({
      method: 'POST',
      url: this.baseUrl,
      data: author
    }).then((response) => {
      this.data.push(response.data);
    });
  }

  deleteAuthor(id) {
    return this.$http({
      method: 'DELETE',
      url: `${this.baseUrl}${id}`
    }).then(() => {
      this.data.splice(getIndex(id, this.data), 1);
      return this.data;
    });
  }

  getAuthors() {
    return this.$http({
      method: 'GET',
      url: this.baseUrl,
      cache: true
    }).then((response) => {
      this.data = response.data;
      return response.data;
    });
  }

  getAuthor(id) {
    if (this.data.length !== 0) {
      return this.$q.resolve(this.data[getIndex(id, this.data)]);
    } else {
      return this.getAuthors().then((authors) => {
        return authors[getIndex(id, authors)];
      });
    }
  }

  updateAuthor(author) {
    return this.$http({
      method: 'PUT',
      url: `${this.baseUrl}${author._id}`,
      data: author
    }).then(() => {
      this.data[getIndex(author._id, this.data)] = author;
    });
  }

  filter(searchTerm) {
    return this.filterService.filterList(this.data, searchTerm);
  }
}
AuthorsService.$inject = [filterServiceName, '$http', '$q'];

export default AuthorsService;
export const name = 'AuthorsService';
