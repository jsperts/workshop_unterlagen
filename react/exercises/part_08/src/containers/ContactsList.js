import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteContact } from '../actions';
import ContactsList from '../components/ContactsList';

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete(id) {
    dispatch(deleteContact(id));
  },
  onEdit(id) {
    ownProps.history.push(`/edit/${id}`);
  },
});

const ContactsListContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactsList),
);

export default ContactsListContainer;
