import {subscribe} from './helpers/pub_sub';
import {OPEN_DETAILS} from './helpers/topics';

function detailsPresenter(model, view) {
  let viewIsClosed = true;

  subscribe(OPEN_DETAILS, (id) => {
    // Only one details view can be open at a given time
    if (viewIsClosed) {
      const city = model.getCityById(id);
      viewIsClosed = false;
      view.render(city);
      view.show();
    }
  });

  view.closeButtonClicked.observe(() => {
    viewIsClosed = true;
    view.hide();
  });
}

export default detailsPresenter;
