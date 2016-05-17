import Observable from './helpers/observable';

function DetailsView(elements) {
  const self = this;
  this._elements = elements;
  this.closeButtonClicked = new Observable();

  elements.closeButton.addEventListener('click', function() {
    self.closeButtonClicked.notify();
  });

  // On transition end show the image
  elements.view.addEventListener('transitionend', function() {
    self._elements.image.classList.remove('js_hidden');
  });
}

DetailsView.prototype.render = function(city) {
  const heading = this._elements.heading;
  heading.textContent = city.name;

  const img = this._elements.image;
  img.src = city.imgUrl;

  const country = this._elements.country;
  country.textContent = city.country;

  const population = this._elements.population;
  population.textContent = city.population;
};

DetailsView.prototype.show = function() {
  // On transition start hide the image to improve paint time
  this._elements.image.classList.add('js_hidden');
  this._elements.view.classList.add('city-details-show');
};

DetailsView.prototype.hide = function() {
  // On transition start hide the image to improve paint time
  this._elements.image.classList.add('js_hidden');
  this._elements.view.classList.remove('city-details-show');
};

export default DetailsView;
