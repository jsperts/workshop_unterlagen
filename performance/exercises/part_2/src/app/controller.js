class Controller {
  constructor(model, view) {
    view.formSubmitted.observe(function (data) {
      model.addCity(data);
    });
  }
}

export default Controller;
