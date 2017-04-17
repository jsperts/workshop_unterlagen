import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-item',
  template: `
    <span>{{internalItem}}</span>
  `
})
export class ItemComponent {
  // Rename input
  @Input('externalItem') internalItem: string; // tslint:disable-line
}
