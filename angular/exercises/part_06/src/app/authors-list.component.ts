import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Author } from './shared';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html'
})
export class AuthorsListComponent {
  @Input() authors: Array<Author>;
  @Output() delete = new EventEmitter();

  addAuthor() {
    console.log('add');
  }

  editAuthor(id: number) {
    console.log('edit');
  }

  deleteAuthor(id: number) {
    this.delete.emit(id);
  }
}
