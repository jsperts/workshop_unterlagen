import initialState from '../initialState';
import { CONTACT_DELETED } from '../events';

function contactsReducer(contacts = initialState.contacts, action) {
  const { type, payload } = action;

  switch (type) {
    case CONTACT_DELETED:
      return contacts.filter(contact => contact.id !== payload);
    default:
      return contacts;
  }
}

export default contactsReducer;
