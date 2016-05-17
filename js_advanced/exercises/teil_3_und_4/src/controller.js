function Controller(model, view) {
  view.formSubmitted.observe(function(data) {
    model.addCity(data);
  });
}

export default Controller;
