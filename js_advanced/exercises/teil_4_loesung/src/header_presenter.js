import {publish, subscribe} from './helpers/pub_sub';
import {sortAscendingClicked, sortDescendingClicked, addCityClicked} from './helpers/topics';
import {fixHeader, unfixHeader} from './helpers/topics';

function headerPresenter(view) {
  view.sortAscendingClicked.observe(function() {
    publish(sortAscendingClicked);
  });

  view.sortDescendingClicked.observe(function() {
    publish(sortDescendingClicked);
  });

  view.addCityClicked.observe(function() {
    publish(addCityClicked);
  });

  subscribe(fixHeader, function() {
    view.fix();
  });

  subscribe(unfixHeader, function() {
    view.unfix();
  });
}

export default headerPresenter;
