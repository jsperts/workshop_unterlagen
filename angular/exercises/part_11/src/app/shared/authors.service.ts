import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { tap, map } from 'rxjs/operators';

import { SearchService } from './search.service';

export interface NewAuthor {
  name: string;
  birthYear: number;
  books: Array<string>;
}

export interface Author extends NewAuthor {
  _id: number;
}

@Injectable()
export class AuthorsService {
  data: Array<Author> = [];
  private serverUrl = 'http://127.0.0.1:3000/authors';

  constructor(private searchService: SearchService, private http: HttpClient) {}

  getAuthors() {
    return this.http.get<Array<Author>>(this.serverUrl)
        .pipe(
            tap((data) => { this.data = data; })
        );
  }

  deleteAuthor(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`)
        .pipe(
            map(() => this.data.filter((elem) => elem._id !== id)),
            tap((data) => this.data = data)
        );
  }

  searchAuthors(queryString: string) {
    return this.searchService.search(queryString, this.data);
  }

  addAuthor(newAuthor: NewAuthor) {
    return this.http
        .post(this.serverUrl, newAuthor);
  }

  updateAuthor(updatedAuthor: Author) {
    return this.http
        .put(`${this.serverUrl}/${updatedAuthor._id}`, updatedAuthor);
  }

  private getAuthorFromArray(id: number) {
    return this.data.filter((elem) => elem._id === id)[0];
  }

  getAuthor(id: number) {
    if (this.data.length !== 0) {
      return of(this.getAuthorFromArray(id));
    } else {
      return this.getAuthors()
          .pipe(
              map(() => this.getAuthorFromArray(id))
          );
    }
  }
}
