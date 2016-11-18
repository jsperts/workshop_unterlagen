import Rectangle from './rectangle';

class Square extends Rectangle {
  constructor(color: string, width: number, name = 'Square') {
    super(color, width, width, name);
  }

  getStyle() {
    return super.getStyle();
  }
}

export default Square;
