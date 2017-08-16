import { Component } from '@angular/core';

import { AuthorsService, Author } from './shared';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html'
})
export class AuthorsListComponent {
  authors: Array<Author> = [];

  constructor(private authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
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
