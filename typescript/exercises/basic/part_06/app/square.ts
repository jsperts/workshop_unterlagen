import Rectangle from './rectangle';

export default class Square extends Rectangle {
  constructor(color: string, width: number, name = 'Square') {
    super(color, width, width);
  }
}
