import { Injectable } from '@angular/core';

import { SearchService } from './search.service';

export interface Author {
  _id: number;
  name: string;
  birthYear: number;
  books: Array<string>;
}

const authors: Array<Author> = [{
  _id: 1,
  name: 'Ian Fleming',
  birthYear: 1908,
  books: ['Dr. No', 'Goldfinger', 'Thunderball']
}, {
  _id: 2,
  name: 'Agatha Christie',
  birthYear: 1890,
  books: ['Murder on the Orient Express', 'Death on the Nile']
}, {
  _id: 3,
  name: 'Dan Brown',
  birthYear: 1964,
  books: ['Digital Fortress', 'Angels and Demons', 'The Da Vinci Code']
}, {
  _id: 4,
  name: 'Isaac Asimov',
  birthYear: 1920,
  books: ['The Neutrino', 'The Human Brain']
}];

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  data = authors;

  constructor(private searchService: SearchService) {}

  getAuthors() {
    return this.data;
  }

  searchAuthors(queryString: string) {
    return this.searchService.search(queryString, this.data);
  }
}
