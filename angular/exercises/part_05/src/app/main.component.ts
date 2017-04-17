import { Component } from '@angular/core';

import { AuthorsService, Author } from './shared';

@Component({
  selector: 'app-main',
  template: `
    <app-search (search)="searchAuthors()"></app-search>
    <app-authors-list [authors]="authors" (delete)="deleteAuthor($event)"></app-authors-list>
  `
})
export class MainComponent {
  authors: Array<Author> = [];

  constructor(private authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

  searchAuthors() {
    console.log('search');
  }

  deleteAuthor(id: number) {
    console.log('delete');
  }
}
