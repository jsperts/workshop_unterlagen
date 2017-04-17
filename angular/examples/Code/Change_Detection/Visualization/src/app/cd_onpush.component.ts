import {
  Component,
  ChangeDetectionStrategy,
  Input,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'cd-onpush',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="border: 1px solid red; padding: 4px;">
      <h3>CD OnPush</h3>
      <p>Change detections: {{count}}</p>
    </div>
    <child-comp></child-comp>
  `,
})
export class CdOnPushComponent implements DoCheck {
  @Input() list: Array<any>;
  count = 0;

  ngDoCheck() {
    this.count++;
  }
}
