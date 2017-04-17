import {
  Component,
  DoCheck,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'child-comp',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div style="border: 1px solid red; padding: 4px; margin-top: 10px;">
      <h4>Child</h4>
      <p>Change Detections {{count}}</p>
    </div>
  `,
})
export class ChildComponent implements DoCheck {
  count = 0;

  ngDoCheck() {
    this.count++;
  }
}
