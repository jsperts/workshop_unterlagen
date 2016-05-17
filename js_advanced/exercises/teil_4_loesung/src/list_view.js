import Observable from './helpers/observable';

function ListView(elements) {
  this._elements = elements;
  this.openDetailsClicked = new Observable();
}

function renderCityHeader(cityName) {
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  heading.appendChild(document.createTextNode(cityName));
  header.appendChild(heading);
  return header;
}

function renderCityDescription(country, population) {
  const ul = document.createElement('ul');
  ul.className = 'city-element-description';

  const countryElement = document.createElement('li');
  // ES6 Template literal
  countryElement.innerHTML = `<span class="js_bold">Country: </span>${country}`;

  const populationElement = document.createElement('li');
  // ES6 Template literal
  populationElement.innerHTML = `<span class="js_bold">Population: </span>${population}`;

  ul.appendChild(countryElement);
  ul.appendChild(populationElement);

  return ul;
}

function renderCityElement(element, city) {
  const header = renderCityHeader(city.name);

  const img = document.createElement('img');
  img.src = city.imgUrl;
  img.className = 'city-element-image';

  const description = renderCityDescription(city.country, city.population);

  element.appendChild(header);
  element.appendChild(img);
  element.appendChild(description);
  return element;
}

function createCityElement() {
  const cityElement = document.createElement('section');
  cityElement.className = 'city-element';
  return cityElement;
}

function removeAll(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

ListView.prototype.render = function(cities) {
  const self = this;
  removeAll(this._elements.view);
  cities.forEach(function(city) {
    const cityElement = renderCityElement(createCityElement(), city);
    this._elements.view.appendChild(cityElement);

    cityElement.addEventListener('click', function() {
      self.openDetailsClicked.notify(city._id);
    });
  }, this);
};

export default ListView;
