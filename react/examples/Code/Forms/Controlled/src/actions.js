import {
  VALUE_CHANGED,
  FORM_SUBMITTED,
} from './events';

export function valueChange(name, value) {
  return {
    type: VALUE_CHANGED,
    payload: {
      name,
      value
    }
  };
}

export function submit() {
  return {
    type: FORM_SUBMITTED,
  };
}
