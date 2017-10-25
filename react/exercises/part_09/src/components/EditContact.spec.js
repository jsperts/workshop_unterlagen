import React from 'react';
import { shallow } from 'enzyme';

import EditContact from './EditContact';

describe('EditContact', () => {
  test('should render null if formData is empty', () => {
    const props = {
      onEdit() {},
      formData: {},
    };
    const wrapper = shallow(<EditContact {...props} />);
    expect(wrapper.getNode()).toBe(null);
  });
});