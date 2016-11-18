import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'cd-onpush',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>CD OnPush</h3>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let str of list">
        <span>{{str}}</span>
      </li>
    </ul>
    <child-comp parent="CD OnPush"></child-comp>
  `,
})
export class CdOnPushComponent implements OnChanges, DoCheck {
  @Input() list: Array<any>;

  ngOnChanges() {
    console.log('OnPush onChanges');
  }

  ngDoCheck() {
    console.log('OnPush doCheck');
  }
}
