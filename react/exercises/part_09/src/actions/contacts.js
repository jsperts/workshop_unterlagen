import {
  CONTACT_DELETED,
  GOT_CONTACTS,
  CONTACT_ADDED,
  CONTACT_UPDATED,
  ADD_CONTACT_HIDDEN,
} from '../events';
import {
  execGetRequest,
  execDeleteRequest,
  execPostRequest,
  execPutRequest,
} from './helpers/execServerRequest';
import { initForm } from './';
import { EDIT_CONTACT_FORM_NAME } from '../constants';

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

export function addContact(contact) {
  return (dispatch) => {
    execPostRequest(url, contact)
        .then((contactWithID) => {
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

export function editContact(id) {
  return (dispatch, getState) => {
    const contactToEdit = getState().contacts.filter((contact) => contact.id === id)[0];
    if (contactToEdit) {
      dispatch(initForm(EDIT_CONTACT_FORM_NAME, contactToEdit));
    } else {
      execGetRequest(`${url}/${id}`)
          .then((contact) => {
            dispatch(initForm(EDIT_CONTACT_FORM_NAME, contact));
          })
    }
  };
}

export function updateContact(history) {
  return (contact) => {
    return (dispatch) => {
      execPutRequest(`${url}/${contact.id}`, contact)
          .then(() => {
            dispatch({
              type: CONTACT_UPDATED,
              payload: contact,
            });

            history.replace('/');
          });
    };
  };
}
