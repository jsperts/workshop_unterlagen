import { connect } from 'react-redux';

import { updateField, formSubmit, updateContact, editContact } from '../actions';
import { EDIT_CONTACT_FORM_NAME } from '../constants';
import EditContact from '../components/EditContact';

const mapStateToProps = (state) => ({
  formData: state.forms[EDIT_CONTACT_FORM_NAME].data,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancel() {
    ownProps.history.replace('/');
  },
  onEdit(id) {
    dispatch(editContact(id));
  },
  onSubmit(e) {
    e.preventDefault();

    dispatch(formSubmit(EDIT_CONTACT_FORM_NAME, updateContact(ownProps.history)))
  },
  onUpdateField(name, value) {
    dispatch(updateField(EDIT_CONTACT_FORM_NAME, name, value));
  }
});

const EditContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditContact);

export default EditContactContainer;
