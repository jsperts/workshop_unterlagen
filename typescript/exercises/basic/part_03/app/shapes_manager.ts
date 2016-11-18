function Shape(color: string, name: string) {
  this.color = color;
  this.name = name;
  Shape.numberOfShapes++;
}
Shape.numberOfShapes = 0;

Shape.prototype.getStyle = function () {
  return {
    background: this.color
  };
};
// abstract
Shape.prototype.getArea = function () {
};

function Rectangle(color: string, width: number, height: number, name = 'Rectangle') {
  Shape.call(this, color, name);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getStyle = function () {
  const style = Shape.prototype.getStyle.call(this);
  style.width = this.width + 'px';
  style.height = this.height + 'px';
  return style;
};

Rectangle.prototype.getArea = function (): number {
  return this.height * this.width;
};

function Square(color: string, width: number, name = 'Square') {
  Rectangle.call(this, color, width, width, name);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.getStyle = function () {
  return Rectangle.prototype.getStyle.call(this);
};

function Diamond(color: string, width: number) {
  Square.call(this, color, width, 'Diamond');
}

Diamond.prototype = Object.create(Square.prototype);
Diamond.prototype.constructor = Diamond;

Diamond.prototype.getStyle = function () {
  const style = Square.prototype.getStyle.call(this);
  style.transform = 'rotate(45deg)';
  return style;
};

function Circle(color: string, width: number, radius: number) {
  Shape.call(this, color, 'Circle');
  this.width = width;
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getStyle = function () {
  const style = Shape.prototype.getStyle.call(this);
  style['border-radius'] = this.radius + '%';
  style.width = this.width + 'px';
  style.height = this.width + 'px';
  return style;
};

Circle.prototype.getArea = function (): number {
  return Math.PI * ((this.width / 2) ** 2);
};

const nameToShape = new Map();
nameToShape.set('Rectangle', Rectangle);
nameToShape.set('Square', Square);
nameToShape.set('Circle', Circle);
nameToShape.set('Diamond', Diamond);

function ShapesManager() {
  this.shapes = [
    new Circle('red', 100, 50),
    new Square('blue', 100),
    new Rectangle('green', 100, 200),
    new Diamond('yellow', 100)
  ];
}

ShapesManager.prototype.getNumberOfShapes = function (): number {
  return Shape.numberOfShapes;
};

ShapesManager.prototype.render = function (): string {
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
};

ShapesManager.prototype.addShape =
    function (shapeName: string, width: number, height: number, color: string): string {
  let shape = null;
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
};

ShapesManager.prototype._filterByName = function (name: string) {
  return this.shapes.filter((shape) => shape.name === name);
};

ShapesManager.prototype.filterByName = function (name: string): string {
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
};

export default ShapesManager;
