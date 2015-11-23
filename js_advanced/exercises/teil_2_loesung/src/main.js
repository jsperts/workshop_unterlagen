import SuperHeroes from './model';
import Controller from './controller';
import Table from './table_view';
import Form from './form_view';

function getFormFields() {
  var formFieldIds = ['superName', 'realName', 'actors'];
  return formFieldIds.map(function(fieldId) {
    return document.getElementById(fieldId);
  });
}

var formElements = {
  form: document.getElementById('addSuperHeroForm'),
  formFields: getFormFields()
};

var tableElements = {
  tableBody: document.getElementById('superHeroes'),
  sortAscending: document.getElementById('sortAscending'),
  sortDescending: document.getElementById('sortDescending')
};

var superHeroes = new SuperHeroes();
var form = new Form(formElements);
var table = new Table(superHeroes, tableElements);
new Controller(superHeroes, form); // jshint ignore:line

table.init();
