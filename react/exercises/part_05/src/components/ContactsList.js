import React from 'react';
import PropTypes from 'prop-types';

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

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
