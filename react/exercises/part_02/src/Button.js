import React from 'react';

function Button({ label }) {
  return (
    <button type="button" className="btn btn-default">
      {label}
    </button>
  );
}

export default Button;
