import {
  Component,
  Input,
  OnChanges,
  DoCheck,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'cd-default',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <h3>CD Default</h3>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let str of list">
        <span>{{str}}</span>
      </li>
    </ul>
    <child-comp parent="CD Default"></child-comp>
  `,
})
export class CdDefaultComponent implements OnChanges, DoCheck {
  @Input() list: Array<string>;

  ngOnChanges() {
    console.log('Default onChanges');
  }

  ngDoCheck() {
    console.log('Default doCheck');
  }
}
