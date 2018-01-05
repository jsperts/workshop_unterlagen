import React from 'react';
import PropTypes from 'prop-types';

import './ContactForm.css';
import { FormData as FormDataPropType } from './propTypes';

function ContactForm({
  onCancel,
  onSubmit,
  onUpdateField,
  formData,
  submitButtonLabel,
}) {
  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div className="row">
        <div className="col-xs-6">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={formData.name}
              onChange={e => onUpdateField('name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel">Telephone:</label>
            <input
              type="text"
              className="form-control"
              name="tel"
              id="tel"
              value={formData.tel}
              onChange={e => onUpdateField('tel', e.target.value)}
            />
          </div>
        </div>
        <div className="col-xs-6">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={formData.email}
              onChange={e => onUpdateField('email', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select
              className="form-control"
              name="type"
              id="type"
              value={formData.type}
              onChange={e => onUpdateField('type', e.target.value)}
            >
              {['Private', 'Business'].map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            {submitButtonLabel}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUpdateField: PropTypes.func.isRequired,
  submitButtonLabel: PropTypes.string.isRequired,
  formData: PropTypes.shape(FormDataPropType).isRequired,
};

export default ContactForm;
