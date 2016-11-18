import ShapesManager from './shapes_manager';

const shapes: Array<string> = ['Rectangle', 'Square', 'Circle', 'Diamond'];

const shapesContainer: HTMLElement = document.getElementById('shapesContainer');
const numberOfShapesElement: HTMLElement = document.getElementById('numberOfShapes');
const widthInput: HTMLInputElement = <HTMLInputElement>document.getElementById('width');
const heightInput: HTMLInputElement = <HTMLInputElement>document.getElementById('height');
const addShape: HTMLButtonElement = <HTMLButtonElement>document.getElementById('addShape');
const filterShapes: HTMLButtonElement = <HTMLButtonElement>document.getElementById('filterShapes');

const manager: ShapesManager = new ShapesManager();
shapesContainer.innerHTML = manager.render();

const numberOfShapes: number = manager.getNumberOfShapes();

numberOfShapesElement.textContent = String(numberOfShapes);

function getRandom(): number {
  return Math.floor(Math.random() * 4);
}

addShape.addEventListener('click', () => {
  let height: string = heightInput.value;
  let width: string = widthInput.value;
  if (height === '') {
    height = '100';
  }

  if (width === '') {
    width = '100';
  }

  shapesContainer.innerHTML = manager.addShape(
      shapes[getRandom()], Number(height), Number(width), 'pink'
  );
  numberOfShapesElement.textContent = String(manager.getNumberOfShapes());
});

filterShapes.addEventListener('click', () => {
  shapesContainer.innerHTML = manager.filterByName(shapes[getRandom()]);
});
