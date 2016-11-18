import {
  Component,
  DoCheck,
  Input,
} from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let str of list">{{str}}</li>
    </ul>
  `,
})
export class ChildComponent implements DoCheck {
  @Input() list: Array<string>;

  ngDoCheck() {
    console.log('DoCheck Child');
  }
}
