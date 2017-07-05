interface ShapeStyle {
  background: string;
}

abstract class Shape {
  public name: string;
  protected color: string;
  static numberOfShapes = 0;

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

interface RectangleStyle extends ShapeStyle {
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
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  constructor(color: string, width: number, name = 'Square') {
    super(color, width, width, name);
  }
}

interface DiamondStyle extends RectangleStyle {
  transform: string;
}

class Diamond extends Square {
  constructor(color: string, width: number) {
    super(color, width, 'Diamond');
  }

  getStyle(): DiamondStyle {
    const style = super.getStyle();
    const {height, width, background} = style;
    return {
      height,
      width,
      background,
      transform: 'rotate(45deg)'
    };
  }
}

interface CircleStyle extends RectangleStyle {
  'border-radius': string;
}

class Circle extends Shape {
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

const nameToShape = new Map();
nameToShape.set('Rectangle', Rectangle);
nameToShape.set('Square', Square);
nameToShape.set('Circle', Circle);
nameToShape.set('Diamond', Diamond);

class ShapesManager {
  shapes: Array<Shape>;

  constructor() {
    this.shapes = [
      new Circle('red', 100, 50),
      new Square('blue', 100),
      new Rectangle('green', 100, 200),
      new Diamond('yellow', 100)
    ];
  }

  getNumberOfShapes(): number {
    return Shape.numberOfShapes;
  }

  render(): string {
    const htmlStrings: Array<string> = this.shapes.map((shape) => {
      const style = shape.getStyle();
      let styleString = '';
      for (const propName in style) {
        if (style.hasOwnProperty(propName)) {
          styleString = styleString + propName + ':' + style[propName] + ';';
        }
      }
      return `
       <div class="shape">
         <div style="${styleString}"></div>
         <p>Area: ${shape.getArea()}</p>
       </div>
       `;
    });

    return htmlStrings.join('');
  }

  addShape(shapeName: string, width: number, height: number, color: string): string {
    let shape: Shape = null;
    switch (shapeName) {
      case 'Rectangle':
        const rectangleConstructor = nameToShape.get(shapeName);
        shape = new rectangleConstructor(color, width, height);
        this.shapes.push(shape);
        break;
      case 'Square':
        const squareConstructor = nameToShape.get(shapeName);
        shape = new squareConstructor(color, width);
        this.shapes.push(shape);
        break;
      case 'Circle':
        const circleConstructor = nameToShape.get(shapeName);
        shape = new circleConstructor(color, width, 50);
        this.shapes.push(shape);
        break;
      case 'Diamond':
        const diamondConstructor = nameToShape.get(shapeName);
        shape = new diamondConstructor(color, width);
        this.shapes.push(shape);
        break;
    }
    return this.render();
  }

  _filterByName(name: string): Array<Shape> {
    return this.shapes.filter((shape) => shape.name === name);
  }

  filterByName(name: string): string {
    switch (name) {
      case 'Rectangle':
        this.shapes = this._filterByName(name);
        break;
      case 'Square':
        this.shapes = this._filterByName(name);
        break;
      case 'Circle':
        this.shapes = this._filterByName(name);
        break;
      case 'Diamond':
        this.shapes = this._filterByName(name);
        break;
    }
    return this.render();
  }
}

export default ShapesManager;
