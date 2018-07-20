import { Component } from '@angular/core';
import { SendToServerService } from './send-to-server.service';

@Component({
  selector: 'app-root',
  template: `
    <app-add-color (add)="onAdd($event)"></app-add-color>
    <app-select-color [colors]="colors"></app-select-color>
  `
})
export class AppComponent {
  colors = ['black', 'red', 'blue', 'yellow'];

  constructor(private sendToServer: SendToServerService) {}

  onAdd(color: string) {
    this.sendToServer.send(color).subscribe((c) => {
      this.colors.push(c);
    });
  }
}
