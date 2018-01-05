import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function NavBar({ onAddContact }) {
  return (
    <nav className="navbar navbar-default">
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-form btn-group">
          <li className="btn-group">
            <Button label="All" />
          </li>
          <li className="btn-group">
            <Button label="Business" />
          </li>
          <li className="btn-group">
            <Button label="Private" />
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-form navbar-right">
          <li>
            <Button label="Add" onClick={onAddContact} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default NavBar;
