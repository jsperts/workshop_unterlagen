import React from 'react';

import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';

function App({ contacts }) {
  return (<div className="container">
    <Header />
    <main>
      <NavBar />
      <ContactForm />
      <ContactsList contacts={contacts} />
    </main>
  </div>);
}

export default App;
