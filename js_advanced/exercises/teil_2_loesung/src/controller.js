function Controller(model, view) {
  view.formSubmitted.observe(function(data) {
    model.addSuperHero(data);
  });
}

export default Controller;
