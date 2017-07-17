import {
  Component,
  Input,
  SimpleChanges,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let hook of hooks">
        {{hook}}
      </li>
    </ul>
    <div>Is first change: {{isFirst}}</div>
    <div>
      Change data: {{changeData}}
    </div>
  `
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, DoCheck {
  @Input() value: number;
  hooks: Array<string> = [];
  changeData: string;
  isFirst: boolean;
  callCounter = {
    init: 1,
    changes: 1,
    contentInit: 1,
    contentChecked: 1,
    viewInit: 1,
    viewChecked: 1,
    doCheck: 1,
  };

  constructor() {
    this.hooks.push('constructor');
    console.log('constructor');
  }

  ngOnInit() {
    this.hooks.push('ngOnInit' + ' ' + this.callCounter.init);
    console.log('init', this.callCounter.init, [...this.hooks]);
    this.callCounter.init++;
  }

  // Only the inputs that have been changed are part of the changeSet!
  ngOnChanges(changeSet: SimpleChanges) {
    this.changeData = JSON.stringify(changeSet);
    this.isFirst = changeSet['value'].isFirstChange();
    this.hooks.push('ngOnChanges' + ' ' + this.callCounter.changes);
    console.log('changes', this.callCounter.changes, [...this.hooks]);
    this.callCounter.changes++;
  }

  ngDoCheck() {
    this.hooks.push('ngDoCheck' + ' ' + this.callCounter.doCheck);
    console.log('doCheck', this.callCounter.doCheck, [...this.hooks]);
    this.callCounter.doCheck++;
  }

  ngAfterContentInit() {
    this.hooks.push('ngAfterContentInit' + ' ' + this.callCounter.contentInit);
    console.log('content init', this.callCounter.contentInit, [...this.hooks]);
    this.callCounter.contentInit++;
  }

  ngAfterContentChecked() {
    this.hooks.push('ngAfterContentChecked' + ' ' + this.callCounter.contentChecked);
    console.log('content checked', this.callCounter.contentChecked, [...this.hooks]);
    this.callCounter.contentChecked++;
  }

  ngAfterViewInit() {
    this.hooks.push('ngAfterViewInit' + ' ' + this.callCounter.viewInit);
    console.log('view init', this.callCounter.viewInit, [...this.hooks]);
    this.callCounter.viewInit++;
  }

  ngAfterViewChecked() {
    this.hooks.push('ngAfterViewChecked' + ' ' + this.callCounter.viewChecked);
    console.log('view checked', this.callCounter.viewChecked, [...this.hooks]);
    this.callCounter.viewChecked++;
  }

  ngOnDestroy() {
    this.hooks = [];
    alert('ngOnDestroy');
  }
}
