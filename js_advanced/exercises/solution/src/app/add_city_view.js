import Observable from './helpers/observable';

class AddCityView {
  constructor({form, closeButton, formFields, view}) {
    this.view = view;
    this.formSubmitted = new Observable();
    this.closeClicked = new Observable();

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = this.getInputFieldValues(formFields);
      this.formSubmitted.notify(data);
      this.reset(formFields);
    });

    closeButton.addEventListener('click', () => {
      this.closeClicked.notify();
    });
  }

  show() {
    this.view.classList.remove('form-closed');
  };

  hide() {
    this.view.classList.add('form-closed');
  };

  getInputFieldValues(fields) {
    return [...fields].reduce((map, element) => Object.assign(map, {
      [element.id]: element.value,
    }), {});
  }

  reset(fields) {
    [...fields].forEach((field) => {
      field.value = '';
    });
  }
}

export default AddCityView;
