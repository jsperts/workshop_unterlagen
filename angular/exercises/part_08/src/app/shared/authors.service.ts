import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { SearchService } from './search.service';

export interface Author {
  _id: number;
  name: string;
  birthYear: number;
  books: Array<string>;
}

@Injectable()
export class AuthorsService {
  data: Array<Author> = [];
  private serverUrl = 'http://127.0.0.1:3000/authors';

  constructor(private searchService: SearchService, private http: HttpClient) {}

  getAuthors() {
    return this.http.get<Array<Author>>(this.serverUrl)
        .do((data) => { this.data = data; });
  }

  deleteAuthor(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`)
        .map(() => this.data.filter((elem) => elem._id !== id))
        .do((data) => this.data = data);
  }

  searchAuthors(queryString: string) {
    return this.searchService.search(queryString, this.data);
  }
}
