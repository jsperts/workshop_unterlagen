import Cities from './model';
import Controller from './controller';
import Main from './main_view';
import Form from './form_view';

function getFormFields() {
  var formFieldIds = ['name', 'country', 'population', 'imgUrl'];
  return formFieldIds.map(function(fieldId) {
    return document.getElementById(fieldId);
  });
}

var formElements = {
  form: document.getElementById('addCityForm'),
  formFields: getFormFields()
};

var cities = new Cities();
var form = new Form(formElements);
var main = new Main(cities, document.getElementsByTagName('main')[0]);

new Controller(cities, form); // jshint ignore:line

main.init();
