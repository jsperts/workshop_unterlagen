import getIndex from './helpers/get_index.js';
import {name as filterServiceName} from './filter.service';

class AuthorsService {
  constructor(filterService, $http) {
    this.baseUrl = 'http://127.0.0.1:8081/api/v1/author/';
    this.filterService = filterService;
    this.$http = $http;
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

  deleteAuthor(id) {
    return this.$http({
      method: 'DELETE',
      url: `${this.baseUrl}${id}`
    }).then(() => {
      this.data.splice(getIndex(id, this.data), 1);
      return this.data;
    });
  }

  filter(searchTerm) {
    return this.filterService.filterList(this.data, searchTerm);
  }
}
AuthorsService.$inject = [filterServiceName, '$http'];

export default AuthorsService;
export const name = 'AuthorsService';
