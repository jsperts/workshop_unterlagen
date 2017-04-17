import { Component } from '@angular/core';

import { AuthorsService, Author } from './shared';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  authors: Array<Author> = [];

  constructor(private authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

  searchAuthors() {
    console.log('search');
  }

  addAuthor() {
    console.log('add');
  }

  editAuthor(id: number) {
    console.log('edit');
  }

  deleteAuthor(id: number) {
    console.log('delete');
  }
}
