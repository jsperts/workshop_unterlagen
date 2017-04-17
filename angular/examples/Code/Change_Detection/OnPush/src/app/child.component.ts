import {
  Component,
  Input,
  OnChanges,
  DoCheck,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'child-comp',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <h4>Child</h4>
    <p>Data: {{data}}</p>
    <button type="text" (click)="changeData()">Change Data</button>
  `,
})
export class ChildComponent implements OnChanges, DoCheck {
  @Input() parent: string;
  data = 'My Data';

  ngOnChanges() {
    console.log('OnChanges. Parent', this.parent);
  }

  ngDoCheck() {
    console.log('DoCheck. Parent', this.parent);
  }

  changeData() {
    this.data = 'New Data';
  }
}
