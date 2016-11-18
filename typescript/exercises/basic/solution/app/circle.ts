import Shape, {ShapeStyle} from './shape';

interface CircleStyle extends ShapeStyle {
  'border-radius': string;
  width: string;
  height: string;
}

class Circle extends Shape {
  private width: number;
  private radius: number;

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

  getArea() {
    return Math.PI * ((this.width / 2) ** 2);
  }
}

export default Circle;
