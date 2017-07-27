import { CONTACT_DELETED, GOT_CONTACTS } from '../events';
import { execGetRequest, execDeleteRequest } from './helpers/execServerRequest';

const url = 'http://127.0.0.1:3001/contacts';

export function deleteContact(id) {
  return (dispatch) => {
    execDeleteRequest(`${url}/${id}`)
        .then(() => {
          dispatch({
            type: CONTACT_DELETED,
            payload: id,
          });
        });
  };
}

export function getContacts() {
  return (dispatch) => {
    execGetRequest(url)
        .then((contacts) => {
          dispatch({
            type: GOT_CONTACTS,
            payload: contacts,
          });
        });
  };
}
