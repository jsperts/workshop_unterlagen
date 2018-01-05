import { connect } from 'react-redux';

import { showAddContact, hideAddContact } from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
  showAddContact: state.appState.showAddContact,
});

const mapDispatchToProps = dispatch => ({
  onShowAddContact() {
    dispatch(showAddContact());
  },
  onHideAddContact() {
    dispatch(hideAddContact());
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
