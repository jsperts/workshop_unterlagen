import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit {
  @Input() color: string;
  el: HTMLElement;

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.el = elem.nativeElement;
  }

  ngOnInit() {
    this.renderer.setStyle(this.el, 'color', this.color);
  }
}
