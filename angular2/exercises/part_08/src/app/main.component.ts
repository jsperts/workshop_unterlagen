import { Component, OnInit } from '@angular/core';

import { AuthorsService, Author } from './shared';

@Component({
  selector: 'app-main',
  template: `
    <app-search (search)="searchAuthors($event)"></app-search>
    <app-authors-list [authors]="authors" (delete)="deleteAuthor($event)"></app-authors-list>
  `
})
export class MainComponent implements OnInit {
  authors: Array<Author> = [];

  constructor(private authorsService: AuthorsService) {}

  ngOnInit() {
    this.authors = this.authorsService.getAuthors();
  }

  searchAuthors(queryString: string) {
    this.authors = this.authorsService.searchAuthors(queryString);
  }

  deleteAuthor(id: number) {
    console.log('delete');
  }
}
