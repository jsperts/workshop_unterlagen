function MainView(model, mainElement) {
  const self = this;
  this._model = model;
  this._elem = mainElement;
  this._model.cityAdded.observe(function() {
    self.render(self._model.getCities());
  });

  window.addEventListener('scroll', function() {
    const header = document.getElementsByTagName('header')[0];
    if (document.body.scrollTop > 40) {
      header.firstElementChild.style.position = 'fixed';
      header.firstElementChild.style.backgroundColor = '#f0f0f0';
    } else {
      header.firstElementChild.style.position = 'static';
      header.firstElementChild.style.backgroundColor = '';
    }
  });

  function sortCities(cities, isAscending) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < cities.length - 1; i++) {
        const secondCityName = cities[i].name.toLowerCase();
        const firstCityName = cities[i + 1].name.toLocaleLowerCase();
        let temp;
        if (isAscending && secondCityName > firstCityName) {
          temp = cities[i];
          cities[i] = cities[i + 1];
          cities[i + 1] = temp;
          swapped = true;
        } else if (!isAscending && secondCityName < firstCityName) {
          temp = cities[i + 1];
          cities[i + 1] = cities[i];
          cities[i] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return cities;
  }

  document.getElementById('sortAscending').addEventListener('click', function() {
    const cities = self._model.getCities();
    self.render(sortCities(cities.slice(), true));
  });
  document.getElementById('sortDescending').addEventListener('click', function() {
    const cities = self._model.getCities();
    self.render(sortCities(cities.slice(), false));
  });

  document.getElementById('addCity').addEventListener('click', function() {
    document.getElementById('addCityView').style.top = '40px';
  });
}

function createCity(container, city) {
  const section = document.createElement('section');
  section.className = 'city';
  container.appendChild(section);
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  const name = document.createTextNode(city.name);

  heading.appendChild(name);
  header.appendChild(heading);
  const img = document.createElement('img');
  img.src = city.imgUrl;
  img.className = 'city-image';
  const ul = document.createElement('ul');
  ul.className = 'city-description';

  const country = document.createElement('li');
  country.innerHTML = '<span style="font-weight: bold;">Country: </span>' + city.country;

  const population = document.createElement('li');

  population.innerHTML = '<span style="font-weight: bold;">Population: </span>' + city.population;

  ul.appendChild(country);
  ul.appendChild(population);
  section.appendChild(header);
  section.appendChild(img);
  section.appendChild(ul);

  /* eslint-disable no-shadow */
  section.addEventListener('click', function() {
    const section = document.createElement('section');
    section.className = 'city-details';
    const header = document.createElement('header');
    header.style.marginLeft = '10px';
    const heading = document.createElement('h1');
    const name = document.createTextNode(city.name);
    heading.appendChild(name);
    const close = document.createElement('span');
    close.appendChild(document.createTextNode('Close'));
    close.addEventListener('click', function() {
      function slideOut() {
        section.style.left = section.getBoundingClientRect().left + 5 + 'px';
        if (section.getBoundingClientRect().left < 2000) {
          setTimeout(slideOut, 10);
        }
      }

      setTimeout(slideOut, 10);
    });
    header.appendChild(close);
    header.appendChild(heading);
    section.appendChild(header);
    document.body.appendChild(section);
    const ul = document.createElement('ul');
    ul.className = 'city-description';

    const country = document.createElement('li');
    country.innerHTML = '<span style="font-weight: bold;">Country: </span>' + city.country;

    const population = document.createElement('li');

    population.innerHTML = '<span style="font-weight: bold;">Population: </span>' + city.population;

    ul.appendChild(country);
    ul.appendChild(population);

    const img = document.createElement('img');
    img.src = city.imgUrl;
    section.appendChild(img);

    function slideIn() {
      section.style.left = section.getBoundingClientRect().left - 5 + 'px';
      if (section.getBoundingClientRect().left > 0) {
        setTimeout(slideIn, 10);
      }
    }

    setTimeout(slideIn, 10);
    section.appendChild(ul);
  });
}
/* eslint-enable no-shadow */

MainView.prototype.render = function(cities) {
  while (this._elem.firstChild) {
    this._elem.removeChild(this._elem.firstChild);
  }
  cities.forEach(function(city) {
    createCity(this._elem, city);
  }, this);
};

MainView.prototype.init = function() {
  const cities = this._model.getCities();
  this.render(cities);
};

export default MainView;
