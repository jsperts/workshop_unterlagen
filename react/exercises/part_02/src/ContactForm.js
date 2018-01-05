import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <form className="contact-form">
      <div className="row">
        <div className="col-xs-6">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="text"
              className="form-control"
              name="telephone"
              id="telephone"
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select className="form-control" name="type" id="type">
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
            Add
          </button>
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
