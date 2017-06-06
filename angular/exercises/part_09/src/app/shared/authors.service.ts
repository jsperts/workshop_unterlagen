import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Observer } from 'rxjs';

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
}
