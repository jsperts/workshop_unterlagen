import SuperHeroes from './model';
import Controller from './controller';
import Table from './table_view';
import Form from './form_view';

function getFormFields() {
  const formFieldIds = ['superName', 'realName', 'actors'];
  return formFieldIds.map(function(fieldId) {
    return document.getElementById(fieldId);
  });
}

const formElements = {
  form: document.getElementById('addSuperHeroForm'),
  formFields: getFormFields()
};

const tableElements = {
  tableBody: document.getElementById('superHeroes'),
  sortAscending: document.getElementById('sortAscending'),
  sortDescending: document.getElementById('sortDescending')
};

const superHeroes = new SuperHeroes();
const form = new Form(formElements);
const table = new Table(superHeroes, tableElements);
new Controller(superHeroes, form); // eslint-disable-line no-new

table.init();
