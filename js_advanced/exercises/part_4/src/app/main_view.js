class MainView {
  constructor(model, { container, header, sortAscending, sortDescending, addCity, addCityView }) {
    this.model = model;
    this.container = container;
    this.model.cityAdded.observe(() => {
      this.render(this.model.getCities());
    });

    /* Sticky header */
    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 40) {
        header.firstElementChild.classList.add('stuck');
      } else {
        header.firstElementChild.classList.remove('stuck');
      }
    });

    sortAscending.addEventListener('click', () => {
      const cities = this.model.getCities();
      this.render(this.sortCities(cities.slice(), true));
    });
    sortDescending.addEventListener('click', () => {
      const cities = this.model.getCities();
      this.render(this.sortCities(cities.slice(), false));
    });

    addCity.addEventListener('click', () => {
      addCityView.classList.remove('form-closed');
    });
  }

  sortCities(cities, isAscending) {
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

  render(cities) {
    this.container.innerHTML = '';
    cities.forEach(function (city) {
      createCity(this.container, city);
    }, this);
  }

  init() {
    const cities = this.model.getCities();
    this.render(cities);
  };
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

export default MainView;
