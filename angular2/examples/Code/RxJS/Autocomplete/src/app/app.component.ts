import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/distinctUntilChanged';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <input #inputElement class="form-control" type="text"/>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let res of results">{{ res }}</li>
    </ul>
  `,
  providers: [ DataService ],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  results: Array<string> = [];
  @ViewChild('inputElement') inputElement: ElementRef;
  private cancelSubscription: Subscription;

  constructor(private dataService: DataService) {}

  ngAfterViewInit() {
    const keyup$ = Observable
        .fromEvent<KeyboardEvent>(this.inputElement.nativeElement, 'keyup')
        .debounceTime(250)
        .map((e) => (<HTMLInputElement>e.target).value)
        .distinctUntilChanged();

    const query = keyup$.switchMap((q) => this.dataService.getData(q).retry(2));
    query.subscribe((result) => {
      this.results = result;
    });
  }

  ngOnDestroy() {
    this.cancelSubscription.unsubscribe();
  }
}
