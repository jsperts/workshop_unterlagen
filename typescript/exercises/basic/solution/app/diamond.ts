import Square from './square';
import {RectangleStyle} from './rectangle';

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
  };
}

export default Diamond;
