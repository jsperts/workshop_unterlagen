import Shape from './shape';
import Rectangle from './rectangle';
import Square from './square';
import Diamond from './diamond';
import Circle from './circle';

// Type alias
type shapeCtor = new (...args: any[]) => Shape;
// Generics
const nameToShape: Map<string, shapeCtor> = new Map<string, shapeCtor>();

nameToShape.set('Rectangle', Rectangle);
nameToShape.set('Square', Square);
nameToShape.set('Circle', Circle);
nameToShape.set('Diamond', Diamond);

class ShapesManager {
  private shapes: Array<Shape> = [
    new Circle('red', 100, 50),
    new Square('blue', 100),
    new Rectangle('green', 100, 200),
    new Diamond('yellow', 100)
  ];

  getNumberOfShapes(): number {
    return Shape.numberOfShapes;
  }

  render(): string {
    const htmlStrings = this.shapes.map((shape) => {
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

  addShape(shapeName: string, width: number, height: number, color: string) {
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

  _filterByName<T extends Shape>(name: string): Array<T> {
    return <Array<T>>this.shapes.filter((shape) => shape.name === name);
  }

  filterByName(name: string) {
    switch (name) {
      case 'Rectangle':
        this.shapes = this._filterByName<Rectangle>(name);
        break;
      case 'Square':
        this.shapes = this._filterByName<Square>(name);
        break;
      case 'Circle':
        this.shapes = this._filterByName<Circle>(name);
        break;
      case 'Diamond':
        this.shapes = this._filterByName<Diamond>(name);
        break;
    }
    return this.render();
  }
}

export default ShapesManager;
