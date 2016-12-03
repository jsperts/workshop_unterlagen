import Observable from './helpers/observable';

function renderCityHeader(cityName) {
  return `
    <header><h1>${cityName}</h1></header>
  `;
}

function renderCityDescription(country, population) {
  return `
    <ul class="city-description">
      <li><span class="font-weight-bold">Country: </span>${country}</li>
      <li><span class="font-weight-bold">Population: </span>${population}</li>
    </ul>
  `;
}

function renderCityElement(city) {
  return `
    ${renderCityHeader(city.name)}
    <img class="city-image" src="${city.imgUrl}"/>
    ${renderCityDescription(city.country, city.population)}
  `;
}

function createCityElement(city) {
  const cityElement = document.createElement('section');
  cityElement.className = 'city';
  cityElement.innerHTML = renderCityElement(city);
  return cityElement;
}

class ListView {
  constructor({ view }) {
    this.view = view;
    this.openDetailsClicked = new Observable();
  }

  removeAll(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  render(cities) {
    this.removeAll(this.view);
    cities.forEach((city) => {
      const cityElement = createCityElement(city);
      this.view.appendChild(cityElement);

      cityElement.addEventListener('click', () => {
        this.openDetailsClicked.notify(city._id);
      });
    });
  }
}

export default ListView;
