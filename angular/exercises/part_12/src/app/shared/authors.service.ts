import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Observer } from 'rxjs';

import 'rxjs/add/operator/map';

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

  constructor(private searchService: SearchService, private http: Http) {}

  getAuthors() {
    return new Observable<Array<Author>>((observer: Observer<Array<Author>>) => {
      this.http.get(this.serverUrl)
        .map((resp) => resp.json())
        .subscribe(
          (data) => { this.data = data; observer.next(this.data); },
          (e) => { observer.error(e); },
          () => { observer.complete(); }
        );
    });
  }

  deleteAuthor(id: number) {
    return new Observable<Array<Author>>((observer: Observer<Array<Author>>) => {
      this.http.delete(`${this.serverUrl}/${id}`)
        .subscribe(
          () => {
            this.data = this.data.filter((elem) => elem._id !== id);
            observer.next(this.data);
          },
          (e) => { observer.error(e); },
          () => { observer.complete(); }
        );
    });
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
    return new Observable<Author>((observer: Observer<Author>) => {
      if (this.data.length !== 0) {
        observer.next(this.getAuthorFromArray(id));
        observer.complete();
      } else {
        this.getAuthors()
          .subscribe(
            () => { observer.next(this.getAuthorFromArray(id)); },
            (e) => { observer.error(e); },
            () => { observer.complete(); }
          );
      }
    });
  }
}
