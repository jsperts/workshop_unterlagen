import { ADD_CONTACT_SHOWN, ADD_CONTACT_HIDDEN } from '../events';

export function showAddContact() {
  return {
    type: ADD_CONTACT_SHOWN,
  };
}

export function hideAddContact() {
  return {
    type: ADD_CONTACT_HIDDEN,
  };
}
