import { Directive, Input, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit {
  @Input() color: string;
  el: HTMLElement;

  constructor(private elem: ElementRef, private renderer: Renderer) {
    this.el = elem.nativeElement;
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.el, 'color', this.color);
  }
}
