import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import EditContactContainer from '../containers/EditContact';
import AddContactContainer from '../containers/AddContact';
import ContactsListContainer from '../containers/ContactsList';

function App({ showAddContact, onShowAddContact }) {
  return (<div className="container">
    <Header />
    <main>
      <Switch>
        <Route path="/edit/:id" component={EditContactContainer} />
        <Route path="/" render={() => <div>
            <NavBar onAddContact={onShowAddContact} />
            { showAddContact && <AddContactContainer /> }
            <ContactsListContainer />
          </div>}
        />
      </Switch>
    </main>
  </div>);
}

App.defaultProps = {
  showAddContact: false,
};

App.propTypes = {
  showAddContact: PropTypes.bool,
  onShowAddContact: PropTypes.func,
};

export default App;
