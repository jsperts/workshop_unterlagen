import {subscribe} from './helpers/pub_sub';
import {openDetails} from './helpers/topics';

function detailsPresenter(model, view) {
  var viewIsClosed = true;

  subscribe(openDetails, function(id) {
    // Only one details view can be open at a given time
    if (viewIsClosed) {
      var city = model.getCityById(id);
      viewIsClosed = false;
      view.render(city);
      view.show();
    }
  });

  view.closeButtonClicked.observe(function() {
    viewIsClosed = true;
    view.hide();
  });
}

export default detailsPresenter;
