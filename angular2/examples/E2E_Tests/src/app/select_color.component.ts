import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-color',
  template: `
    <div (click)="selectColor(color)" *ngFor="let color of colors" paint [color]="color">
      {{color}}
    </div>
    <p>Selected color: {{selectedColor}}</p>
  `,
})
export class SelectColorComponent {
  @Input() colors: Array<string> = [];
  selectedColor = '';

  selectColor(color: string) {
    this.selectedColor = color;
  }
}
