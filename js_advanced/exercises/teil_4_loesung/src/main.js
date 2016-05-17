import Cities from './model';
import mainPresenter from './main_presenter';

import AddCityView from './add_city_view';
import addCityPresenter from './add_city_presenter';

import ListView from './list_view';
import listPresenter from './list_presenter';

import DetailsView from './details_view';
import detailsPresenter from './details_presenter';

import HeaderView from './header_view';
import headerPresenter from './header_presenter';

const cities = new Cities();

/* Add City: start */
function getFormFields() {
  const formFieldIds = ['name', 'country', 'population', 'imgUrl'];
  return formFieldIds.map(function(fieldId) {
    return document.getElementById(fieldId);
  });
}

const addCityElements = {
  form: document.getElementById('addCityForm'),
  closeButton: document.getElementById('closeAddCityView'),
  view: document.getElementById('addCityView'),
  formFields: getFormFields()
};
const addCityView = new AddCityView(addCityElements);
addCityPresenter(cities, addCityView);
/* Add City: end */

/* Details: start */
const detailsElements = {
  view: document.getElementById('detailsView'),
  heading: document.getElementById('detailsViewHeading'),
  closeButton: document.getElementById('detailsViewClose'),
  country: document.getElementById('detailsViewCountry'),
  population: document.getElementById('detailsViewPopulation'),
  image: document.getElementById('detailsViewImg')
};
const detailsView = new DetailsView(detailsElements);
detailsPresenter(cities, detailsView);
/* Details: end */

/* List: start */
const listViewElements = {
  view: document.getElementsByTagName('main')[0]
};
const listView = new ListView(listViewElements);
listPresenter(cities, listView).init();
/* List: end */

/* Header: start */
const headerViewElements = {
  view: document.getElementsByTagName('header')[0],
  sortAscendingButton: document.getElementById('sortAscending'),
  sortDescendingButton: document.getElementById('sortDescending'),
  addCityButton: document.getElementById('addCity')
};
const headerView = new HeaderView(headerViewElements);
headerPresenter(headerView);
/* Header: end */

mainPresenter(window, document);
