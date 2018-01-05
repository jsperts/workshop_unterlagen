import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import AddContactContainer from '../containers/AddContact';
import ContactsListContainer from '../containers/ContactsList';

function App({ showAddContact, onShowAddContact }) {
  return (
    <div className="container">
      <Header />
      <main>
        <NavBar onAddContact={onShowAddContact} />
        {showAddContact && <AddContactContainer />}
        <ContactsListContainer />
      </main>
    </div>
  );
}

App.defaultProps = {
  showAddContact: false,
};

App.propTypes = {
  showAddContact: PropTypes.bool,
  onShowAddContact: PropTypes.func.isRequired,
};

export default App;
