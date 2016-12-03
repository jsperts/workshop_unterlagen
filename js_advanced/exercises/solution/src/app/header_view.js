import Observable from './helpers/observable';

class HeaderView {
  constructor({ view, sortAscendingButton, sortDescendingButton, addCityButton }) {
    this.view = view;
    this.sortAscendingClicked = new Observable();
    this.sortDescendingClicked = new Observable();
    this.addCityClicked = new Observable();

    sortAscendingButton.addEventListener('click', () => {
      this.sortAscendingClicked.notify();
    });

    sortDescendingButton.addEventListener('click', () => {
      this.sortDescendingClicked.notify();
    });

    addCityButton.addEventListener('click', () => {
      this.addCityClicked.notify();
    });
  }

  fix() {
    this.view.firstElementChild.classList.add('stuck');
  }

  unfix() {
    this.view.firstElementChild.classList.remove('stuck');
  }
}

export default HeaderView;
