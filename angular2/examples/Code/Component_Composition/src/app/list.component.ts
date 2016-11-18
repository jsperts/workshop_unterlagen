import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-list',
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of listItems">
        <my-item [externalItem]="item"></my-item>
      </li>
    </ul>
  `,
})
export class ListComponent {
  @Input() listItems: Array<string>;
}
