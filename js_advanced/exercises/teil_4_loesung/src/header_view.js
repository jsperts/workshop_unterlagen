import Observable from './helpers/observable';

function HeaderView(elements) {
  const self = this;
  this._elements = elements;
  this.sortAscendingClicked = new Observable();
  this.sortDescendingClicked = new Observable();
  this.addCityClicked = new Observable();

  elements.sortAscendingButton.addEventListener('click', function() {
    self.sortAscendingClicked.notify();
  });

  elements.sortDescendingButton.addEventListener('click', function() {
    self.sortDescendingClicked.notify();
  });

  elements.addCityButton.addEventListener('click', function() {
    self.addCityClicked.notify();
  });
}

HeaderView.prototype.fix = function() {
  this._elements.view.firstElementChild.classList.add('main-header-scroll');
};

HeaderView.prototype.unfix = function() {
  this._elements.view.firstElementChild.classList.remove('main-header-scroll');
};

export default HeaderView;
