import { RectangleStyle } from './rectangle';
import Square from './square';

interface DiamondStyle extends RectangleStyle {
  transform: string;
}

export default class Diamond extends Square {
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
