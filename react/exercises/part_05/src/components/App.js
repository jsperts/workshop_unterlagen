import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Header from './Header';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import ContactsListContainer from '../containers/ContactsList';

function App({ showAddContact, onShowAddContact, onHideAddContact }) {
  return (<div className="container">
    <Header />
    <main>
      <NavBar onAddContact={onShowAddContact} />
      { showAddContact && <ContactForm onCancel={onHideAddContact} /> }
      <ContactsListContainer />
    </main>
  </div>);
}

App.defaultProps = {
  showAddContact: false,
};

App.propTypes = {
  showAddContact: PropTypes.bool,
  onShowAddContact: PropTypes.func,
  onHideAddContact: PropTypes.func,
};

export default App;
