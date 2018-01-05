import { connect } from 'react-redux';

import { showAddContact, initForm } from '../actions';
import { ADD_CONTACT_FORM_NAME, ADD_CONTACT_FORM_DATA } from '../constants';
import App from '../components/App';

const mapStateToProps = state => ({
  showAddContact: state.appState.showAddContact,
});

const mapDispatchToProps = dispatch => ({
  onShowAddContact() {
    dispatch(initForm(ADD_CONTACT_FORM_NAME, ADD_CONTACT_FORM_DATA));
    dispatch(showAddContact());
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
