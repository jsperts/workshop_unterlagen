import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Author } from './shared';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html'
})
export class AuthorsListComponent {
  @Input() authors: Array<Author>;
  @Output() delete = new EventEmitter();

  constructor(private router: Router) {}

  addAuthor() {
    this.router.navigate(['add']);
  }

  editAuthor(id: number) {
    this.router.navigate(['edit', String(id)]);
  }

  deleteAuthor(id: number) {
    this.delete.emit(id);
  }
}
