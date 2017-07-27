import { connect } from 'react-redux';

import { deleteContact } from '../actions';
import ContactsList from '../components/ContactsList';

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete(id) {
    dispatch(deleteContact(id));
  },
});

const ContactsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsList);

export default ContactsListContainer;
