import { FIELD_UPDATED, INIT_FORM } from '../events';

export function updateField(formName, fieldName, value) {
  return {
    type: FIELD_UPDATED,
    payload: {
      formName,
      fieldName,
      value,
    },
  };
}

export function formSubmit(formName, action) {
  return (dispatch, getState) => {
    const formData = getState().forms[formName].data;
    dispatch(action(formData));
  };
}

export function initForm(formName, data) {
  return {
    type: INIT_FORM,
    payload: {
      formName,
      data,
    },
  };
}
