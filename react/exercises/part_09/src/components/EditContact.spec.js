import React from 'react';
import { shallow } from 'enzyme';

import EditContact from './EditContact';

describe('EditContact', () => {
  test('should render null if formData is empty', () => {
    const props = {
      onEdit() {},
      formData: {},
      onCancel() {},
      onSubmit() {},
      onUpdateField() {},
      match: {},
    };
    const wrapper = shallow(<EditContact {...props} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.getElement()).toBe(null);
  });
});
