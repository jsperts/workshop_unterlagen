import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Author, NewAuthor } from './shared';

@Component({
  selector: 'app-authors-form',
  templateUrl: './authors-form.component.html',
})
export class AuthorsFormComponent {
  @Input() title: string;
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input () set author(author: Author | NewAuthor) {
    this.authorToEdit = Object.assign({}, author);
  }
  authorToEdit: Author | NewAuthor;
  bookToAdd = '';

  onSubmit($event: Event) {
    $event.stopPropagation();
    this.submit.emit(this.authorToEdit);
  }

  onCancel() {
    this.cancel.emit();
  }

  addBook() {
    this.authorToEdit.books = [...this.authorToEdit.books, this.bookToAdd];
  }

  removeBook(index: number) {
    this.authorToEdit.books = this.authorToEdit.books.filter((_, i) => i !== index);
  }
}
