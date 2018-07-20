import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cd-onpush-observable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>CD OnPush Observable</h3>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let str of observableList">
        <span>{{str}}</span>
      </li>
    </ul>
    <child-comp parent="CD OnPush Observable"></child-comp>
  `,
})
export class CdOnPushObservableComponent implements OnInit, OnChanges, DoCheck {
  @Input() list: Observable<Array<string>>;
  observableList: Array<string>;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.list.subscribe((data) => {
      this.observableList = data;
      this.changeDetector.markForCheck();
    });
  }

  ngOnChanges() {
    console.log('OnPush Observable onChanges');
  }

  ngDoCheck() {
    console.log('OnPush Observable doCheck');
  }
}
