import React from 'react';

import Contact from './Contact';

function ContactsList({ contacts, onDelete }) {
  return (
    <ul className="list-group">
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ContactsList;
