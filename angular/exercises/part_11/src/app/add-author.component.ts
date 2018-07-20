import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NewAuthor, AuthorsService } from './shared';

@Component({
  template: `
    <app-authors-form
      title="Add Author"
      [author]="authorTemplate"
      (submit)="onSubmit($event)"
      (cancel)="onCancel()"
    ></app-authors-form>
  `
})
export class AddAuthorComponent implements OnDestroy {
  authorTemplate: NewAuthor = {
    name: '',
    birthYear: 1950,
    books: []
  };
  private subscription: Subscription;

  constructor(
    private router: Router,
    private authorsService: AuthorsService
  ) {}

  onSubmit(newAuthor: NewAuthor) {
    this.subscription = this.authorsService
      .addAuthor(newAuthor)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }

  onCancel() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
