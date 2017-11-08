import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, switchMap, debounceTime, retry, distinctUntilChanged } from 'rxjs/operators';

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
    const keyup$ = fromEvent<KeyboardEvent>(this.inputElement.nativeElement, 'keyup')
        .pipe(
            debounceTime(250),
            map((e) => (<HTMLInputElement>e.target).value),
            distinctUntilChanged()
        );

    const query = keyup$
        .pipe(
            switchMap((q) => this.dataService.getData(q).pipe(retry(2)))
        );
    query.subscribe((result) => {
      this.results = result;
    });
  }

  ngOnDestroy() {
    this.cancelSubscription.unsubscribe();
  }
}
