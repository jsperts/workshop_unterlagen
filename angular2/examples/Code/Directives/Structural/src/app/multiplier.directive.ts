import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[multiplier]'
})
export class MultiplierDirective {
  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef
  ) { }
  @Input () set multiplier(num: number) {
    this.viewContainer.clear();
    for (let i = 0; i < num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
