function MainView(model, mainElement) {
  var self = this;
  this._model = model;
  this._elem = mainElement;
  this._model.cityAdded.observe(function() {
    self.render(self._model.getCities());
  });

  window.addEventListener('scroll', function() {
    var header = document.getElementsByTagName('header')[0];
    if (document.body.scrollTop > 40) {
      header.firstElementChild.style.position = 'fixed';
      header.firstElementChild.style.backgroundColor = '#f0f0f0';
    } else {
      header.firstElementChild.style.position = 'static';
      header.firstElementChild.style.backgroundColor = '';
    }
  });

  function sortCities(cities, isAscending) {
    var swapped;
    do {
      swapped = false;
      for (var i = 0; i < cities.length - 1; i++) {
        var secondCityName = cities[i].name.toLowerCase();
        var firstCityName = cities[i + 1].name.toLocaleLowerCase();
        var temp;
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
    var cities = self._model.getCities();
    self.render(sortCities(cities.slice(), true));
  });
  document.getElementById('sortDescending').addEventListener('click', function() {
    var cities = self._model.getCities();
    self.render(sortCities(cities.slice(), false));
  });

  document.getElementById('addCity').addEventListener('click', function() {
    document.getElementById('addCityView').style.top = '40px';
  });
}

function createCity(container, city) {
  var section = document.createElement('section');
  section.className = 'city';
  container.appendChild(section);
  var header = document.createElement('header');
  var heading = document.createElement('h1');
  var name = document.createTextNode(city.name);

  heading.appendChild(name);
  header.appendChild(heading);
  var img = document.createElement('img');
  img.src = city.imgUrl;
  img.className = 'city-image';
  var ul = document.createElement('ul');
  ul.className = 'city-description';

  var country = document.createElement('li');
  country.innerHTML = '<span style="font-weight: bold;">Country: </span>' + city.country;

  var population = document.createElement('li');

  population.innerHTML = '<span style="font-weight: bold;">Population: </span>' + city.population;

  ul.appendChild(country);
  ul.appendChild(population);
  section.appendChild(header);
  section.appendChild(img);
  section.appendChild(ul);

  section.addEventListener('click', function() {
    var section = document.createElement('section');
    section.className = 'city-details';
    var header = document.createElement('header');
    header.style.marginLeft = '10px';
    var heading = document.createElement('h1');
    var name = document.createTextNode(city.name);
    heading.appendChild(name);
    var close = document.createElement('span');
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
    var ul = document.createElement('ul');
    ul.className = 'city-description';

    var country = document.createElement('li');
    country.innerHTML = '<span style="font-weight: bold;">Country: </span>' + city.country;

    var population = document.createElement('li');

    population.innerHTML = '<span style="font-weight: bold;">Population: </span>' + city.population;

    ul.appendChild(country);
    ul.appendChild(population);

    var img = document.createElement('img');
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

MainView.prototype.render = function(cities) {
  while (this._elem.firstChild) {
    this._elem.removeChild(this._elem.firstChild);
  }
  cities.forEach(function(city) {
    createCity(this._elem, city);
  }, this);
};

MainView.prototype.init = function() {
  var cities = this._model.getCities();
  this.render(cities);
};

export default MainView;
