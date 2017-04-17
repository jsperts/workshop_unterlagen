import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Author, NewAuthor } from './shared';

@Component({
  selector: 'app-authors-form',
  templateUrl: './authors_form.component.html',
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
    this.authorToEdit.books.push(this.bookToAdd);
  }

  removeBook(index: number) {
    this.authorToEdit.books.splice(index, 1);
  }
}
