import { ADD_CONTACT_SHOWN, ADD_CONTACT_HIDDEN } from '../events';
import appReducer from './app';

describe('app reducer', () => {
  it('Should set showAddContact to true with ADD_CONTACT_SHOWN', () => {
    const state = { showAddContact: false };
    const action = { type: ADD_CONTACT_SHOWN };
    const expectedState = { showAddContact: true };

    const newState = appReducer(state, action);

    expect(newState).toEqual(expectedState);
  });

  it('Should set showAddContact to false with ADD_CONTACT_HIDDEN', () => {
    const state = { showAddContact: true };
    const action = { type: ADD_CONTACT_HIDDEN };
    const expectedState = { showAddContact: false };

    const newState = appReducer(state, action);

    expect(newState).toEqual(expectedState);
  });
});
