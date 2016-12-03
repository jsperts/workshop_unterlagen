import '../styles/styles.css';

import Cities from './model';
import Controller from './controller';
import Main from './main_view';
import Form from './form_view';

function getFormFields() {
  const formFieldIds = ['name', 'country', 'population', 'imgUrl'];
  return formFieldIds.map(function(fieldId) {
    return document.getElementById(fieldId);
  });
}

const formElements = {
  form: document.getElementById('addCityForm'),
  formFields: getFormFields()
};

const cities = new Cities();
const form = new Form(formElements);
const main = new Main(cities, document.getElementsByTagName('main')[0]);

new Controller(cities, form); // eslint-disable-line no-new

main.init();
