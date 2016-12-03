import Observable from './helpers/observable';

class DetailsView {
  constructor(elements) {
    this.elements = elements;
    this.closeButtonClicked = new Observable();

    elements.closeButton.addEventListener('click', () => {
      this.closeButtonClicked.notify();
    });

    // On transition end show the image
    elements.view.addEventListener('transitionend', () => {
      elements.image.classList.remove('js_hidden');
    });
  }

  render(city) {
    const heading = this.elements.heading;
    heading.textContent = city.name;

    const img = this.elements.image;
    img.src = city.imgUrl;

    const country = this.elements.country;
    country.textContent = city.country;

    const population = this.elements.population;
    population.textContent = city.population;
  }

  show() {
    // On transition start hide the image to improve paint time
    this.elements.image.classList.add('js_hidden');
    this.elements.view.classList.add('city-details-show');
  }

  hide() {
    // On transition start hide the image to improve paint time
    this.elements.image.classList.add('js_hidden');
    this.elements.view.classList.remove('city-details-show');
  }
}

export default DetailsView;
