import '../styles/styles.css';

const imagePath = 'images/';

const kansas = {
  _id: 1,
  name: 'Kansas City',
  country: 'USA',
  population: '470,800',
  imgUrl: imagePath + 'kansas.jpg'
};

const newYork = {
  _id: 2,
  name: 'New York',
  country: 'USA',
  population: '8,491,079',
  imgUrl: imagePath + 'new_york.jpg'
};

const manchester = {
  _id: 3,
  name: 'Manchester',
  country: 'UK',
  population: '110,378',
  imgUrl: imagePath + 'manchester.jpg'
};

const panama = {
  _id: 4,
  name: 'Panama City',
  country: 'Panama',
  population: '880,691',
  imgUrl: imagePath + 'panama.jpg'
};

const london = {
  _id: 5,
  name: 'London',
  country: 'UK',
  population: '8,308,000',
  imgUrl: imagePath + 'london.jpg'
};

const brisbane = {
  _id: 6,
  name: 'Brisbane',
  country: 'Australia',
  population: '2,274,600',
  imgUrl: imagePath + 'brisbane.jpg'
};

const moscow = {
  _id: 7,
  name: 'Moscow',
  country: 'Russia',
  population: '11,920,000',
  imgUrl: imagePath + 'moscow.jpg'
};

const toronto = {
  _id: 8,
  name: 'Toronto',
  country: 'Canada',
  population: '2,615,000',
  imgUrl: imagePath + 'toronto.jpg'
};

const frankfurt = {
  _id: 9,
  name: 'Frankfurt',
  country: 'Germany',
  population: '687,775',
  imgUrl: imagePath + 'frankfurt.jpg'
};

const dubai = {
  _id: 10,
  name: 'Dubai',
  country: 'UAE',
  population: '2,106,177',
  imgUrl: imagePath + 'dubai.jpg'
};

const cities = [kansas, newYork, manchester, panama, london, brisbane, moscow, toronto, frankfurt, dubai];

const mainElement = document.getElementsByTagName('main')[0];

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

  section.addEventListener('click', function() {
    const section = document.createElement('section');
    section.className = 'city-details';
    const header = document.createElement('header');
    header.style.marginLeft = '10px';
    const heading = document.createElement('h1');
    const name = document.createTextNode(city.name);
    heading.appendChild(name);
    const close = document.createElement('a');
    close.href = 'javascript:void 0';
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
    img.className = 'city-image';

    function slideIn() {
      section.style.left = section.getBoundingClientRect().left - 5 + 'px';
      if (section.getBoundingClientRect().left > 0) {
        setTimeout(slideIn, 10);
      }
    }

    setTimeout(slideIn, 10);

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapper.appendChild(img);
    wrapper.appendChild(ul);
    section.appendChild(wrapper);
  });
}

cities.forEach(function(city) {
  createCity(mainElement, city);
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
  mainElement.innerHTML = '';
  sortCities(cities.slice(), true).forEach(function(city) {
    createCity(mainElement, city);

  });
});
document.getElementById('sortDescending').addEventListener('click', function() {
  mainElement.innerHTML = '';
  sortCities(cities.slice(), false).forEach(function(city) {
    createCity(mainElement, city);
  });
});

window.addEventListener('scroll', function() {
  const header = document.getElementsByTagName('header')[0];
  if (document.body.scrollTop > 40) {
  header.firstElementChild.style.position = 'fixed';
  header.firstElementChild.style.backgroundColor = '#f0f0f0';
  header.firstElementChild.style.left = '0';
  } else {
    header.firstElementChild.style.position = 'static';

    header.firstElementChild.style.backgroundColor = '';
  }
});

document.getElementById('addCity').addEventListener('click', function() {
  document.getElementById('addCityView').style.top = '40px';
});

const form = document.getElementById('addCityForm');
const inputName = document.getElementById('name');
const inputCountry = document.getElementById('country');
const inputPopulation = document.getElementById('population');
const inputImgUrl = document.getElementById('imgUrl');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newCity = {
    _id: cities.length + 2,
    name: inputName.value,
    country: inputCountry.value,
    population: inputPopulation.value,
    imgUrl: inputImgUrl.value,
  };
  cities.push(newCity);
  mainElement.innerHTML = '';
  cities.forEach(function(city) {
    createCity(mainElement, city);

  });
  inputName.value = '';
  inputCountry.value = '';
  inputPopulation.value = '';
  inputImgUrl.value = '';
  document.getElementById('addCityView').style.top = '-240px';
});

document.getElementById('closeFormView').addEventListener('click', function() {
  document.getElementById('addCityView').style.top = '-240px';
});
