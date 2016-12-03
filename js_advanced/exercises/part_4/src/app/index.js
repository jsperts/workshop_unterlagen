import '../styles/styles.css';

import Cities from './model';
import Controller from './controller';
import Main from './main_view';
import Form from './form_view';

function getFormFields() {
  const formFieldIds = ['name', 'country', 'population', 'imgUrl'];
  return formFieldIds.map((id) => document.getElementById(id));
}

const addCityView = document.getElementById('addCityView');

const formElements = {
  form: document.getElementById('addCityForm'),
  formFields: getFormFields(),
  closeFormView: document.getElementById('closeFormView'),
  addCityView,
};

const cities = new Cities();
const form = new Form(formElements);

const elements = {
  header: document.getElementsByTagName('header')[0],
  container: document.getElementsByTagName('main')[0],
  sortAscending: document.getElementById('sortAscending'),
  sortDescending: document.getElementById('sortDescending'),
  addCity: document.getElementById('addCity'),
  addCityView,
};
const main = new Main(cities, elements);

new Controller(cities, form); // eslint-disable-line no-new

main.init();
