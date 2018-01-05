import formsReducer from './forms';
import { FIELD_UPDATED, INIT_FORM } from '../events';

describe('forms Reducer', () => {
  test('Should initialize form data', () => {
    const formName = 'testForm';
    const state = { [formName]: { data: {} } };
    const data = { name: 'foo', email: 'bar' };
    const action = {
      type: INIT_FORM,
      payload: {
        formName,
        data,
      },
    };
    const expectedState = {
      [formName]: { data },
    };

    const newState = formsReducer(state, action);

    expect(newState).toEqual(expectedState);
  });

  test('Should update a field', () => {
    const formName = 'testForm';
    const fieldName = 'name';
    const state = { [formName]: { data: { [fieldName]: 'foo' } } };
    const newValue = 'bar';
    const action = {
      type: FIELD_UPDATED,
      payload: {
        formName,
        fieldName,
        value: newValue,
      },
    };
    const expectedState = {
      [formName]: { data: { [fieldName]: newValue } },
    };

    const newState = formsReducer(state, action);

    expect(newState).toEqual(expectedState);
  });
});
