import Observable from './observable';

class Form {
  constructor({ form, formFields, addCityView, closeFormView }) {
    this.formSubmitted = new Observable();

    this.form = form;
    this.formFields = formFields;

    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = this.getInputFieldValues(this.formFields);
      this.formSubmitted.notify(data);
      this.resetInputFieldValues(this.formFields);
      addCityView.classList.add('form-closed');
    });

    closeFormView.addEventListener('click', () => {
      addCityView.classList.add('form-closed');
    });
  }

  getInputFieldValues(fields) {
    return [...fields].reduce((map, element) => Object.assign(map, {
      [element.id]: element.value,
    }), {});
  }

  resetInputFieldValues(fields) {
    [...fields].forEach((field) => {
      field.value = '';
    });
  }
}

export default Form;
