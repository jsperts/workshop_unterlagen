import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Author, AuthorsService } from './shared';

@Component({
  template: `
    <app-authors-form
      title="Edit Author"
      [author]="author"
      (submit)="onSubmit($event)"
      (cancel)="onCancel()"
    ></app-authors-form>
  `
})
export class EditAuthorComponent implements OnInit, OnDestroy {
  author: Author;
  private submitSubscription: Subscription;
  private getSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorsService: AuthorsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getSubscription = this.authorsService.getAuthor(id)
      .subscribe((author) => { this.author = author; });
  }

  onSubmit(updatedAuthor: Author) {
    this.submitSubscription = this.authorsService
      .updateAuthor(updatedAuthor)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }

  onCancel() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    if (this.submitSubscription) {
      this.submitSubscription.unsubscribe();
    }

    if (this.getSubscription) {
      this.getSubscription.unsubscribe();
    }
  }
}
