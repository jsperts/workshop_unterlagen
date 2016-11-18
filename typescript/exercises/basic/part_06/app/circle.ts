import { RectangleStyle } from './rectangle';
import Shape from './shape';

interface CircleStyle extends RectangleStyle {
  'border-radius': string;
}

export default class Circle extends Shape {
  width: number;
  radius: number;

  constructor(color: string, width: number, radius: number) {
    super(color, 'Circle');
    this.width = width;
    this.radius = radius;
  }

  getStyle(): CircleStyle {
    const style = super.getStyle();
    return {
      background: style.background,
      'border-radius': this.radius + '%',
      width: this.width + 'px',
      height: this.width + 'px'
    };
  }

  getArea(): number {
    return Math.PI * ((this.width / 2) ** 2);
  }
}
