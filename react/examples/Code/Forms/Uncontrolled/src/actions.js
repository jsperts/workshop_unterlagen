import { FORM_SUBMITTED } from './events';

export function submit(data) {
  return {
    type: FORM_SUBMITTED,
    payload: data,
  };
}
