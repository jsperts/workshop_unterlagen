import { connect } from 'react-redux';

import {
  updateField,
  hideAddContact,
  formSubmit,
  addContact,
} from '../actions';
import { ADD_CONTACT_FORM_NAME } from '../constants';
import ContactForm from '../components/ContactForm';

const mapStateToProps = state => ({
  formData: state.forms[ADD_CONTACT_FORM_NAME].data,
  submitButtonLabel: 'Add',
});

const mapDispatchToProps = dispatch => ({
  onCancel() {
    dispatch(hideAddContact());
  },
  onSubmit(e) {
    e.preventDefault();

    dispatch(formSubmit(ADD_CONTACT_FORM_NAME, addContact));
  },
  onUpdateField(name, value) {
    dispatch(updateField(ADD_CONTACT_FORM_NAME, name, value));
  },
});

const AddContactContainer = connect(mapStateToProps, mapDispatchToProps)(
  ContactForm,
);

export default AddContactContainer;
