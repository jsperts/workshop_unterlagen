import {subscribe} from './helpers/pub_sub';
import {ADD_CITY_CLICKED} from './helpers/topics';

function addCityPresenter(model, view) {
  view.formSubmitted.observe((data) => {
    model.addCity(data);
    view.hide();
  });

  view.closeClicked.observe(() => {
    view.hide();
  });

  subscribe(ADD_CITY_CLICKED, () => {
    view.show();
  });
}

export default addCityPresenter;
