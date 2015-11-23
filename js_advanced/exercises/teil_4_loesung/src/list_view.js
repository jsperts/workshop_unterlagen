import Observable from './helpers/observable';

function ListView(elements) {
  this._elements = elements;
  this.openDetailsClicked = new Observable();
}

function renderCityHeader(cityName) {
  var header = document.createElement('header');
  var heading = document.createElement('h1');
  heading.appendChild(document.createTextNode(cityName));
  header.appendChild(heading);
  return header;
}

function renderCityDescription(country, population) {
  var ul = document.createElement('ul');
  ul.className = 'city-element-description';

  var countryElement = document.createElement('li');
  // ES6 Template literal
  countryElement.innerHTML = `<span class="js_bold">Country: </span>${country}`;

  var populationElement = document.createElement('li');
  // ES6 Template literal
  populationElement.innerHTML = `<span class="js_bold">Population: </span>${population}`;

  ul.appendChild(countryElement);
  ul.appendChild(populationElement);

  return ul;
}

function renderCityElement(element, city) {
  var header = renderCityHeader(city.name);

  var img = document.createElement('img');
  img.src = city.imgUrl;
  img.className = 'city-element-image';

  var description = renderCityDescription(city.country, city.population);

  element.appendChild(header);
  element.appendChild(img);
  element.appendChild(description);
  return element;
}

function createCityElement() {
  var cityElement = document.createElement('section');
  cityElement.className = 'city-element';
  return cityElement;
}

function removeAll(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

ListView.prototype.render = function(cities) {
  var self = this;
  removeAll(this._elements.view);
  cities.forEach(function(city) {
    var cityElement = renderCityElement(createCityElement(), city);
    this._elements.view.appendChild(cityElement);

    cityElement.addEventListener('click', function() {
      self.openDetailsClicked.notify(city._id);
    });
  }, this);
};

export default ListView;
