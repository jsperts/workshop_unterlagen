export interface ShapeStyle {
  background: string;
}

abstract class Shape {
  public name: string;
  protected color: string;
  static numberOfShapes: number = 0;

  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
    Shape.numberOfShapes++;
  }

  getStyle(): ShapeStyle {
    return {
      background: this.color
    };
  }

  abstract getArea(): number;
}

export default Shape;
