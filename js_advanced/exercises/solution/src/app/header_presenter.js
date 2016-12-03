import {publish, subscribe} from './helpers/pub_sub';
import {
    SORT_ASCENDING_CLICKED,
    SORT_DESCENDING_CLICKED,
    ADD_CITY_CLICKED,
    FIX_HEADER,
    UNFIX_HEADER,
} from './helpers/topics';

function headerPresenter(view) {
  view.sortAscendingClicked.observe(function() {
    publish(SORT_ASCENDING_CLICKED);
  });

  view.sortDescendingClicked.observe(function() {
    publish(SORT_DESCENDING_CLICKED);
  });

  view.addCityClicked.observe(function() {
    publish(ADD_CITY_CLICKED);
  });

  subscribe(FIX_HEADER, function() {
    view.fix();
  });

  subscribe(UNFIX_HEADER, function() {
    view.unfix();
  });
}

export default headerPresenter;
