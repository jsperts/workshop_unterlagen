import Shape, {ShapeStyle} from './shape';

export interface RectangleStyle extends ShapeStyle {
  width: string;
  height: string;
}

class Rectangle extends Shape {
  protected width: number;
  protected height: number;

  constructor(color: string, width: number, height: number, name = 'Rectangle') {
    super(color, name);
    this.width = width;
    this.height = height;
  }

  getStyle(): RectangleStyle {
    const style = super.getStyle();
    return {
      background: style.background,
      width: this.width + 'px',
      height: this.height + 'px'
    };
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export default Rectangle;
