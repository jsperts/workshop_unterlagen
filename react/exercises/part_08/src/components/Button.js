import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick }) {
  return (
    <button type="button" className="btn btn-default" onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
