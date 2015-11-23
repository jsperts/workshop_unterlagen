import Observable from './observable';

function getInputFieldValues(fields) {
  var res = {};
  Array.prototype.forEach.call(fields, function(field) {
    res[field.id] = field.value;
  });
  return res;
}

function resetInputFieldValues(fields) {
  Array.prototype.forEach.call(fields, function(field) {
    field.value = '';
  });
}

function Form(elements) {
  var self = this;
  this.formSubmitted = new Observable();

  this._form = elements.form;
  this._formFields = elements.formFields;

  this._form.addEventListener('submit', function(event) {
    event.preventDefault();
    var data = getInputFieldValues(self._formFields);
    self.formSubmitted.notify(data);
    resetInputFieldValues(self._formFields);
    document.getElementById('addCityView').style.top = '-200px';
  });

  document.getElementById('closeFormView').addEventListener('click', function() {
    document.getElementById('addCityView').style.top = '-200px';
  });
}

export default Form;
