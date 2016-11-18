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
  var self = this;
  return this.$http({
    method: 'POST',
    url: this.baseUrl,
    data: author
  }).then(function (response) {
    self.data.push(response.data);
  });
};

AuthorsService.prototype.deleteAuthor = function (id) {
  var self = this;
  return this.$http({
    method: 'DELETE',
    url: this.baseUrl + id
  }).then(function () {
    self.data.splice(getIndex(id, self.data), 1);
    return self.data;
  });
};

AuthorsService.prototype.getAuthors = function () {
  var self = this;
  return this.$http({
    method: 'GET',
    url: this.baseUrl,
    cache: true
  }).then(function (response) {
    self.data = response.data;
    return response.data;
  });
};

AuthorsService.prototype.getAuthor = function (id) {
  if (this.data.length !== 0) {
    return this.$q.resolve(this.data[getIndex(id, this.data)]);
  } else {
    return this.getAuthors().then(function (authors) {
      return authors[getIndex(id, authors)];
    });
  }
};

AuthorsService.prototype.updateAuthor = function (author) {
  var self = this;
  return this.$http({
    method: 'PUT',
    url: this.baseUrl + author._id,
    data: author
  }).then(function () {
    self.data[getIndex(author._id, self.data)] = author;
  });
};

AuthorsService.prototype.filter = function (searchTerm) {
  return this.filterService.filterList(this.data, searchTerm);
};

export default AuthorsService;
export var name = 'AuthorsService';
