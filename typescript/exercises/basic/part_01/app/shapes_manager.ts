function Shape(color, name) {
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

function Rectangle(color, width, height, name) {
  Shape.call(this, color, name || 'Rectangle');
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

Rectangle.prototype.getArea = function () {
  return this.height * this.width;
};

function Square(color, width, name) {
  Rectangle.call(this, color, width, width, name || 'Square');
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.getStyle = function () {
  return Rectangle.prototype.getStyle.call(this);
};

function Diamond(color, width) {
  Square.call(this, color, width, 'Diamond');
}

Diamond.prototype = Object.create(Square.prototype);
Diamond.prototype.constructor = Diamond;

Diamond.prototype.getStyle = function () {
  const style = Square.prototype.getStyle.call(this);
  style.transform = 'rotate(45deg)';
  return style;
};

function Circle(color, width, radius) {
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

Circle.prototype.getArea = function () {
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

ShapesManager.prototype.getNumberOfShapes = function () {
  return Shape.numberOfShapes;
};

ShapesManager.prototype.render = function () {
  const htmlStrings = this.shapes.map(function (shape) {
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

ShapesManager.prototype.addShape = function (shapeName, width, height, color) {
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

ShapesManager.prototype._filterByName = function (name) {
  return this.shapes.filter(function (shape) {
    return shape.name === name;
  });
};

ShapesManager.prototype.filterByName = function (name) {
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
