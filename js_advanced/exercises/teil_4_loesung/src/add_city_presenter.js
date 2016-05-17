import {subscribe} from './helpers/pub_sub';
import {ADD_CITY_CLICKED} from './helpers/topics';

function addCityPresenter(model, view) {
  view.formSubmitted.observe(function(data) {
    model.addCity(data);
    view.reset();
    view.hide();
  });

  view.closeClicked.observe(function() {
    view.hide();
  });

  subscribe(ADD_CITY_CLICKED, function() {
    view.show();
  });
}

export default addCityPresenter;
