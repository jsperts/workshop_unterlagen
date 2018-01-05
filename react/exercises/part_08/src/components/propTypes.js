import PropTypes from 'prop-types';

export const FormData = {
  name: PropTypes.string,
  email: PropTypes.string,
  tel: PropTypes.string,
  type: PropTypes.oneOf(['Private', 'Business']),
  id: PropTypes.number,
};
