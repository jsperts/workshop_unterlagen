import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm';
import { FormData as FormDataPropType } from './propTypes';

class EditContact extends Component {
  componentDidMount() {
    this.props.onEdit(Number(this.props.match.params.id));
  }

  render() {
    if (Object.keys(this.props.formData).length === 0) {
      return null;
    }

    return (
      <ContactForm
        onCancel={this.props.onCancel}
        onSubmit={this.props.onSubmit}
        onUpdateField={this.props.onUpdateField}
        formData={this.props.formData}
        submitButtonLabel="Update"
      />
    );
  }
}

EditContact.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUpdateField: PropTypes.func.isRequired,
  formData: PropTypes.shape(FormDataPropType).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditContact;
