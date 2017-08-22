import { publish } from './helpers/pub_sub';
import { FIX_HEADER, UNFIX_HEADER } from './helpers/topics';

function mainPresenter(window, document) {
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40) {
      publish(FIX_HEADER);
    } else {
      publish(UNFIX_HEADER);
    }
  });
}

export default mainPresenter;
