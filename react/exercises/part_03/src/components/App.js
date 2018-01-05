import React from 'react';

import './App.css';
import Header from './Header';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import ContactsListContainer from '../containers/ContactsList';

function App({ showAddContact, onShowAddContact, onHideAddContact }) {
  return (
    <div className="container">
      <Header />
      <main>
        <NavBar onAddContact={onShowAddContact} />
        {showAddContact && <ContactForm onCancel={onHideAddContact} />}
        <ContactsListContainer />
      </main>
    </div>
  );
}

export default App;
