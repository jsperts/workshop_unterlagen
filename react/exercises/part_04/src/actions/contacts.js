import { CONTACT_DELETED } from '../events';

export function deleteContact(id) {
  return {
    type: CONTACT_DELETED,
    payload: id,
  };
}
