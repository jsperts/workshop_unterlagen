import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[paint]'
})
export class PaintDirective implements OnInit {
  @Input() color: string;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }
}
