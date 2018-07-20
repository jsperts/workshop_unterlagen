import {
  Component,
  Input,
  DoCheck,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'cd-default',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div style="border: 1px solid red; padding: 4px;">
      <h3>CD Default</h3>
      <p>Change detections: {{count}}</p>
    </div>
    <child-comp></child-comp>
  `,
})
export class CdDefaultComponent implements DoCheck {
  @Input() list: Array<string>;
  count = 0;

  ngDoCheck() {
    this.count++;
  }
}
