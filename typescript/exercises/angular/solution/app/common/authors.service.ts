import * as angular from 'angular';

import getIndex from './helpers/get_index';
import FilterService, {name as filterServiceName} from './filter.service';
import {Author, AuthorWithID} from './interfaces/author';

class AuthorsService {
  baseUrl = 'http://127.0.0.1:3000/authors/';
  data: Array<AuthorWithID> = [];

  constructor(
      private filterService: FilterService,
      private $http: angular.IHttpService,
      private $q: angular.IQService
  ) {}

  addAuthor(author: Author) {
    return this.$http<AuthorWithID>({
      method: 'POST',
      url: this.baseUrl,
      data: author
    }).then((response) => {
      this.data.push(response.data);
    });
  }

  deleteAuthor(id: number) {
    return this.$http({
      method: 'DELETE',
      url: `${this.baseUrl}${id}`
    }).then(() => {
      this.data.splice(getIndex<AuthorWithID>(id, this.data), 1);
      return this.data;
    });
  }

  getAuthors() {
    return this.$http<Array<AuthorWithID>>({
      method: 'GET',
      url: this.baseUrl,
      cache: true
    }).then((response) => {
      this.data = response.data;
      return response.data;
    });
  }

  getAuthor(id: number) {
    if (this.data.length !== 0) {
      return this.$q.resolve(this.data[getIndex(id, this.data)]);
    } else {
      return this.getAuthors().then((authors: Array<AuthorWithID>) => {
        return authors[getIndex(id, authors)];
      });
    }
  }

  updateAuthor(author: AuthorWithID) {
    return this.$http({
      method: 'PUT',
      url: `${this.baseUrl}${author._id}`,
      data: author
    }).then(() => {
      this.data[getIndex<AuthorWithID>(author._id, this.data)] = author;
    });
  }

  filter(searchTerm: string): Array<AuthorWithID> {
    return this.filterService.filterList<AuthorWithID>(this.data, searchTerm);
  }
}
AuthorsService.$inject = [filterServiceName, '$http', '$q'];

export default AuthorsService;
export const name = 'AuthorsService';
