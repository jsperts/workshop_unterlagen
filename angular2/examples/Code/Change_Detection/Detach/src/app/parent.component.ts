import {
  Component,
  Input,
  DoCheck,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'parent-comp',
  template: `
    <div class="row">
      <div class="col-xs-12 text-center">
        <div class="btn-group" style="margin-bottom: 20px">
          <button type="button" class="btn btn-default" (click)="detach()">Detach</button>
          <button type="button" class="btn btn-default" (click)="reattach()">Reattach</button>
          <button type="button" class="btn btn-default" (click)="detectChanges()">Detect Changes</button>
        </div>
      </div>
    </div>
    <child-comp [list]="list"></child-comp>
  `,
})
export class ParentComponent implements DoCheck {
  @Input() list: Array<string>;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngDoCheck() {
    console.log('DoCheck Parent');
  }

  detach() {
    this.changeDetector.detach();
  }

  reattach() {
    this.changeDetector.reattach();
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }
}
