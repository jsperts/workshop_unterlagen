import Observable from './helpers/observable';

function getInputFieldValues(fields) {
  const res = {};
  Array.prototype.forEach.call(fields, function(field) {
    res[field.id] = field.value;
  });
  return res;
}

function AddCityView(elements) {
  const self = this;
  this._elements = elements;
  this.formSubmitted = new Observable();
  this.closeClicked = new Observable();

  elements.form.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = getInputFieldValues(self._elements.formFields);
    self.formSubmitted.notify(data);
  });

  elements.closeButton.addEventListener('click', function() {
    self.closeClicked.notify();
  });
}

AddCityView.prototype.show = function() {
  this._elements.view.className = 'show';
};

AddCityView.prototype.hide = function() {
  this._elements.view.className = '';
};

AddCityView.prototype.reset = function() {
  Array.prototype.forEach.call(this._elements.formFields, function(field) {
    field.value = '';
  });
};

export default AddCityView;
