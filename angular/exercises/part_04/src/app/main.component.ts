import { Component } from '@angular/core';

import { AuthorsService, Author } from './shared';

@Component({
  selector: 'app-main',
  template: `
    <app-search></app-search>
    <app-authors-list></app-authors-list>
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
