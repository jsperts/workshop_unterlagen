import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthorsService, Author } from './shared';

@Component({
  selector: 'app-main',
  template: `
    <app-search (search)="searchAuthors($event)"></app-search>
    <app-authors-list [authors]="authors" (delete)="deleteAuthor($event)"></app-authors-list>
  `
})
export class MainComponent implements OnInit, OnDestroy {
  authors: Array<Author> = [];
  private subscriptions: Array<Subscription> = [];

  constructor(private authorsService: AuthorsService) {}

  private removeSubscription(subscription: Subscription) {
    this.subscriptions = this.subscriptions.filter((sub) => sub !== subscription);
  }

  ngOnInit() {
    const subscription = this.authorsService
      .getAuthors()
      .subscribe((authors) => {
        this.authors = authors;
      }, () => {}, () => { this.removeSubscription(subscription); });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => { subscription.unsubscribe(); });
  }

  searchAuthors(queryString: string) {
    this.authors = this.authorsService.searchAuthors(queryString);
  }

  deleteAuthor(id: number) {
    const subscription = this.authorsService
      .deleteAuthor(id)
      .subscribe((authors) => {
        this.authors = authors;
      }, () => {}, () => { this.removeSubscription(subscription); });
    this.subscriptions.push(subscription);
  }
}
