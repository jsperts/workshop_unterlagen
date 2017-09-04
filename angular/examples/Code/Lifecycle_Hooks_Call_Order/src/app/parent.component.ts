import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  DoCheck,
  Input
} from '@angular/core';

@Component({
  selector: 'my-parent',
  template: '<my-child [input]="input"></my-child>'
})
export class ParentComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy, DoCheck {
  name = 'my-parent';
  @Input() input: number;

  constructor() {
    console.log('constructor', this.name);
  }

  ngOnInit() {
    console.log('init', this.name);
  }

  ngOnChanges() {
    console.log('changes', this.name);
  }

  ngDoCheck() {
    console.log('doCheck', this.name);
  }

  ngAfterContentInit() {
    console.log('content init', this.name);
  }

  ngAfterContentChecked() {
    console.log('content checked', this.name);
  }

  ngAfterViewInit() {
    console.log('view init', this.name);
  }

  ngAfterViewChecked() {
    console.log('view checked', this.name);
  }

  ngOnDestroy() {
    alert('ngOnDestroy' + this.name);
  }
}
