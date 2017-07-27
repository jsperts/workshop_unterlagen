import initialState from '../initialState';
import {
  CONTACT_DELETED,
  CONTACT_ADDED,
  CONTACT_UPDATED,
  GOT_CONTACTS,
} from '../events';

function contactsReducer(contacts = initialState.contacts, action) {
  const { type, payload } = action;

  switch(type) {
    case GOT_CONTACTS: return action.payload;
    case CONTACT_DELETED: return contacts.filter((contact) => contact.id !== payload);
    case CONTACT_ADDED: return [...contacts, payload];
    case CONTACT_UPDATED: return contacts.map((contact) => {
      if (contact.id === payload.id) {
        return payload;
      }
      return contact;
    });
    default: return contacts;
  }
}

export default contactsReducer;
