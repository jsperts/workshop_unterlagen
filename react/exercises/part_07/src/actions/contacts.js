import {
  CONTACT_DELETED,
  GOT_CONTACTS,
  CONTACT_ADDED,
  ADD_CONTACT_HIDDEN,
} from '../events';
import {
  execGetRequest,
  execDeleteRequest,
  execPostRequest,
} from './helpers/execServerRequest';

const url = 'http://127.0.0.1:3001/contacts';

export function deleteContact(id) {
  return dispatch => {
    execDeleteRequest(`${url}/${id}`).then(() => {
      dispatch({
        type: CONTACT_DELETED,
        payload: id,
      });
    });
  };
}

export function getContacts() {
  return dispatch => {
    execGetRequest(url).then(contacts => {
      dispatch({
        type: GOT_CONTACTS,
        payload: contacts,
      });
    });
  };
}

export function addContact(contact) {
  return dispatch => {
    execPostRequest(url, contact).then(contactWithID => {
      dispatch({
        type: CONTACT_ADDED,
        payload: contactWithID,
      });

      dispatch({
        type: ADD_CONTACT_HIDDEN,
      });
    });
  };
}
