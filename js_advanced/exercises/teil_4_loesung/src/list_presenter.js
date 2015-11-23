import {publish, subscribe} from './helpers/pub_sub';
import {openDetails} from './helpers/topics';
import {sortAscendingClicked, sortDescendingClicked} from './helpers/topics';

function sortCities(cities, isAscending) {
  cities.sort(function(firstCity, secondCity) {
    var firstCityName = firstCity.name.toLowerCase();
    var secondCityName = secondCity.name.toLocaleLowerCase();
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
  view.openDetailsClicked.observe(function(id) {
    publish(openDetails, id);
  });

  subscribe(sortAscendingClicked, function() {
    var cities = model.getCities();
    view.render(sortCities(cities.slice(), true));
  });

  subscribe(sortDescendingClicked, function() {
    var cities = model.getCities();
    view.render(sortCities(cities.slice(), false));
  });

  model.cityAdded.observe(function() {
    view.render(model.getCities());
  });

  function init() {
    var cities = model.getCities();
    view.render(cities);
  }

  return {
    init: init
  };
}

export default listPresenter;
