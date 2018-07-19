import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

const data = ['Foo', 'Bar', 'Baz'];

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="col-xs-12 text-center">
        <div class="btn-group" style="margin-bottom: 20px">
          <button type="button" class="btn btn-default" (click)="changeContent()">Change Content</button>
          <button type="button" class="btn btn-default" (click)="changeRef()">Change Ref</button>
          <button type="button" class="btn btn-default" (click)="triggerObservable()">Trigger Observable</button>
        </div>
      </div>
    </div>
    <div class="row">
      <cd-default [list]="data" class="col-xs-4"></cd-default>
      <cd-onpush [list]="data" class="col-xs-4"></cd-onpush>
      <cd-onpush-observable [list]="observable" class="col-xs-4"></cd-onpush-observable>
    </div>
  `,
})
export class AppComponent implements OnInit {
  data: Array<string> = data;
  observable: Observable<Array<string>>;
  private observer: Observer<Array<string>>;

  ngOnInit() {
    this.observable = new Observable((observer: Observer<Array<string>>) => {
      this.observer = observer;
      observer.next(data);
    });
  }

  changeContent() {
    this.data[0] = 'Foobar';
  }

  changeRef() {
    this.data = [...this.data];
  }

  triggerObservable() {
    this.observer.next(data);
  }
}
