import React from 'react';

function ContactDetails({ email, type }) {
  return (
    <div className="row">
      <div className="col-xs-6">Email: {email}</div>
      <div className="col-xs-6">Type: {type}</div>
    </div>
  );
}

function ContactControls({ id, onDelete }) {
  function execDelete() {
    onDelete(id);
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <span className="glyphicon glyphicon-remove" onClick={execDelete} />
          <span className="glyphicon glyphicon-edit" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <span className="glyphicon glyphicon-chevron-down" />
        </div>
      </div>
    </div>
  );
}

function Contact({ id, name, tel, type, email, onDelete }) {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-xs-6">
          <div>Name: {name}</div>
          <div>Tel.: {tel}</div>
        </div>
        <div className="col-xs-6 text-right">
          <ContactControls onDelete={onDelete} id={id} />
        </div>
      </div>
      <ContactDetails email={email} type={type} />
    </li>
  );
}

export default Contact;
