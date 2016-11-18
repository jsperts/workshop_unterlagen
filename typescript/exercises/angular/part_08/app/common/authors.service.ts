import getIndex from './helpers/get_index';
import FilterService, {name as filterServiceName} from './filter.service';

import {Author, AuthorWithID} from './interfaces/author';

class AuthorsService {
  baseUrl = 'http://127.0.0.1:3000/authors/';
  data: Array<AuthorWithID> = [];

  constructor(private filterService: FilterService, private $http, private $q) {}

  addAuthor(author: Author) {
    return this.$http({
      method: 'POST',
      url: this.baseUrl,
      data: author
    }).then((response) => {
      this.data.push(response.data);
    });
  }

  deleteAuthor(id: number): any {
    return this.$http({
      method: 'DELETE',
      url: this.baseUrl + id
    }).then(() => {
      this.data.splice(getIndex(id, this.data), 1);
      return this.data;
    });
  }

  getAuthors(): any {
    return this.$http({
      method: 'GET',
      url: this.baseUrl,
      cache: true
    }).then((response) => {
      this.data = response.data;
      return response.data;
    });
  }

  getAuthor(id: number): any {
    if (this.data.length !== 0) {
      return this.$q.resolve(this.data[getIndex(id, this.data)]);
    } else {
      return this.getAuthors().then((authors: Array<AuthorWithID>) => {
        return authors[getIndex(id, authors)];
      });
    }
  }

  updateAuthor(author: AuthorWithID): any {
    return this.$http({
      method: 'PUT',
      url: this.baseUrl + author._id,
      data: author
    }).then(() => {
      this.data[getIndex(author._id, this.data)] = author;
    });
  }

  filter(searchTerm: string): Array<AuthorWithID> {
    return this.filterService.filterList(this.data, searchTerm);
  }
}

AuthorsService.$inject = [filterServiceName, '$http', '$q'];


export default AuthorsService;
export const name = 'AuthorsService';
