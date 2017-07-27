import { ADD_CONTACT_FORM_NAME, EDIT_CONTACT_FORM_NAME } from './constants';

const initialState = {
  appState: {
    showAddContact: false,
  },
  contacts: [],
  forms: {
    [ADD_CONTACT_FORM_NAME]: { data: {} },
    [EDIT_CONTACT_FORM_NAME]: { data: {} },
  },
};

export default initialState;
