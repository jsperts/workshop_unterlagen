import {publish, subscribe} from './helpers/pub_sub';
import {OPEN_DETAILS, SORT_ASCENDING_CLICKED, SORT_DESCENDING_CLICKED} from './helpers/topics';

function sortCities(cities, isAscending) {
  cities.sort(function(firstCity, secondCity) {
    const firstCityName = firstCity.name.toLowerCase();
    const secondCityName = secondCity.name.toLocaleLowerCase();
    if (firstCityName < secondCityName) {
      return isAscending ? -1 : 1;
    } else if (firstCityName > secondCityName) {
      return isAscending ? 1 : -1;
    } else {
      return 0;
    }
  });
  return cities;
}

function listPresenter(model, view) {
  view.openDetailsClicked.observe((id) => {
    publish(OPEN_DETAILS, id);
  });

  subscribe(SORT_ASCENDING_CLICKED, () => {
    const cities = model.getCities();
    view.render(sortCities(cities.slice(), true));
  });

  subscribe(SORT_DESCENDING_CLICKED, () => {
    const cities = model.getCities();
    view.render(sortCities(cities.slice(), false));
  });

  model.cityAdded.observe(() => {
    view.render(model.getCities());
  });

  function init() {
    const cities = model.getCities();
    view.render(cities);
  }

  return {
    init
  };
}

export default listPresenter;
