import {publish} from './helpers/pub_sub';
import {fixHeader, unfixHeader} from './helpers/topics';

function mainPresenter(window, document) {
  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 40) {
      publish(fixHeader);
    } else {
      publish(unfixHeader);
    }
  });
}

export default mainPresenter;
