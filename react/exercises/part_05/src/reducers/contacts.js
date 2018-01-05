import initialState from '../initialState';
import { CONTACT_DELETED, GOT_CONTACTS } from '../events';

function contactsReducer(contacts = initialState.contacts, action) {
  const { type, payload } = action;

  switch (type) {
    case GOT_CONTACTS:
      return action.payload;
    case CONTACT_DELETED:
      return contacts.filter(contact => contact.id !== payload);
    default:
      return contacts;
  }
}

export default contactsReducer;
