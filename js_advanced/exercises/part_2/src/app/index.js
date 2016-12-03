import '../styles/styles.css';

const imagePath = 'images/';

const kansas = {
  _id: 1,
  name: 'Kansas City',
  country: 'USA',
  population: '470,800',
  imgUrl: imagePath + 'kansas.jpg',
};

const newYork = {
  _id: 2,
  name: 'New York',
  country: 'USA',
  population: '8,491,079',
  imgUrl: imagePath + 'new_york.jpg',
};

const manchester = {
  _id: 3,
  name: 'Manchester',
  country: 'UK',
  population: '110,378',
  imgUrl: imagePath + 'manchester.jpg',
};

const panama = {
  _id: 4,
  name: 'Panama City',
  country: 'Panama',
  population: '880,691',
  imgUrl: imagePath + 'panama.jpg',
};

const london = {
  _id: 5,
  name: 'London',
  country: 'UK',
  population: '8,308,000',
  imgUrl: imagePath + 'london.jpg',
};

const brisbane = {
  _id: 6,
  name: 'Brisbane',
  country: 'Australia',
  population: '2,274,600',
  imgUrl: imagePath + 'brisbane.jpg',
};

const moscow = {
  _id: 7,
  name: 'Moscow',
  country: 'Russia',
  population: '11,920,000',
  imgUrl: imagePath + 'moscow.jpg',
};

const toronto = {
  _id: 8,
  name: 'Toronto',
  country: 'Canada',
  population: '2,615,000',
  imgUrl: imagePath + 'toronto.jpg',
};

const frankfurt = {
  _id: 9,
  name: 'Frankfurt',
  country: 'Germany',
  population: '687,775',
  imgUrl: imagePath + 'frankfurt.jpg',
};

const dubai = {
  _id: 10,
  name: 'Dubai',
  country: 'UAE',
  population: '2,106,177',
  imgUrl: imagePath + 'dubai.jpg',
};

const cities = [
  kansas,
  newYork,
  manchester,
  panama,
  london,
  brisbane,
  moscow,
  toronto,
  frankfurt,
  dubai,
];

const mainElement = document.getElementsByTagName('main')[0];
const header = document.getElementsByTagName('header')[0];

function renderCities(cities) {
  mainElement.innerHTML = '';
  cities.forEach((city) => {
    createCity(mainElement, city);
  });
}

function createCityDetails(container, city) {
  return () => {
    const detailsTemplate = `
      <section id="cityDetails${city._id}" class="city-details">
        <header style="margin-left: 10px;">
          <span id="cityClose${city._id}">Close</span>
          <h1>${city.name}</h1>
        </header>
        <div class="wrapper">
          <img class="city-image" src="${city.imgUrl}"/>
          <ul class="city-description">
            <li>
              <span class="font-weight-bold">Country: ${city.country}</span>
            </li>
            <li>
              <span class="font-weight-bold">Population: ${city.population}</span>
            </li>
          </ul>
        </div>
      </section>
   `;

    const fragment = document.createDocumentFragment();
    fragment.appendChild(document.createElement('div'));
    fragment.children[0].innerHTML = detailsTemplate;
    const close = fragment.getElementById('cityClose' + city._id);
    const section = fragment.getElementById('cityDetails' + city._id);

    close.addEventListener('click', () => {
      function slideOut() {
        section.style.left = section.getBoundingClientRect().left + 5 + 'px';
        if (section.getBoundingClientRect().left < 2000) {
          setTimeout(slideOut, 10);
        }
      }

      setTimeout(slideOut, 10);
    });

    function slideIn() {
      section.style.left = section.getBoundingClientRect().left - 5 + 'px';
      if (section.getBoundingClientRect().left > 0) {
        setTimeout(slideIn, 10);
      }
    }

    setTimeout(slideIn, 10);
    container.appendChild(fragment);
  };
}

function createCity(container, city) {
  const cityTemplate = `<section id="city${city._id}" class="city">
    <header>
      <h1>${city.name}</h1>
    </header>
    <img class="city-image" src="${city.imgUrl}"/>
    <ul class="city-description">
      <li><span class="font-weight-bold">Country: </span>${city.country}</li>
      <li><span class="font-weight-bold">Population: </span>${city.population}</li>
    </ul>
  </section>`;

  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.createElement('div'));
  fragment.children[0].innerHTML = cityTemplate;
  const section = fragment.getElementById('city' + city._id);

  /* City details */
  section.addEventListener('click', createCityDetails(container, city));

  container.appendChild(fragment);
}

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

document.getElementById('sortAscending').addEventListener('click', () => {
  renderCities(sortCities(cities.slice(), true));
});
document.getElementById('sortDescending').addEventListener('click', () => {
  renderCities(sortCities(cities.slice(), false));
});

/* Add city */
const addCityView = document.getElementById('addCityView');
const form = document.getElementById('addCityForm');
const formElementIds = ['name', 'country', 'population', 'imgUrl'];
const formElements = formElementIds.map((id) => document.getElementById(id));

function openForm() {
  addCityView.classList.remove('form-closed');
}

function closeForm() {
  addCityView.classList.add('form-closed');
}

document.getElementById('addCity').addEventListener('click', () => {
  openForm();
});

document.getElementById('closeFormView').addEventListener('click', () => {
  closeForm();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newCity = formElements.reduce((map, element) => Object.assign(map, {
    [element.id]: element.value,
  }), {});
  newCity._id = cities.length + 2;

  cities.push(newCity);

  renderCities(cities);

  formElements.forEach((element) => {
    element.value = '';
  });
  closeForm();
});

/* Sticky header */
window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 40) {
    header.firstElementChild.classList.add('stuck');
  } else {
    header.firstElementChild.classList.remove('stuck');
  }
});

// Initial rendering
renderCities(cities);
