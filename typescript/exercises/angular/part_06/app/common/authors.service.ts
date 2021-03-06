import getIndex from './helpers/get_index';
import {name as filterServiceName} from './filter.service';

function AuthorsService(filterService, $http, $q) {
  this.baseUrl = 'http://127.0.0.1:3000/authors/';
  this.filterService = filterService;
  this.$http = $http;
  this.$q = $q;
  this.data = [];
}

AuthorsService.$inject = [filterServiceName, '$http', '$q'];

AuthorsService.prototype.addAuthor = function (author) {
  return this.$http({
    method: 'POST',
    url: this.baseUrl,
    data: author
  }).then((response) => {
    this.data.push(response.data);
  });
};

AuthorsService.prototype.deleteAuthor = function (id: number): Array<any> {
  return this.$http({
    method: 'DELETE',
    url: this.baseUrl + id
  }).then(() => {
    this.data.splice(getIndex(id, this.data), 1);
    return this.data;
  });
};

AuthorsService.prototype.getAuthors = function (): Array<any> {
  return this.$http({
    method: 'GET',
    url: this.baseUrl,
    cache: true
  }).then((response) => {
    this.data = response.data;
    return response.data;
  });
};

AuthorsService.prototype.getAuthor = function (id: number) {
  if (this.data.length !== 0) {
    return this.$q.resolve(this.data[getIndex(id, this.data)]);
  } else {
    return this.getAuthors().then((authors) => {
      return authors[getIndex(id, authors)];
    });
  }
};

AuthorsService.prototype.updateAuthor = function (author) {
  return this.$http({
    method: 'PUT',
    url: this.baseUrl + author._id,
    data: author
  }).then(() => {
    this.data[getIndex(author._id, this.data)] = author;
  });
};

AuthorsService.prototype.filter = function (searchTerm: string) {
  return this.filterService.filterList(this.data, searchTerm);
};

export default AuthorsService;
export const name = 'AuthorsService';
