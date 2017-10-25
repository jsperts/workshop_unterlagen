import React from 'react';
import { shallow } from 'enzyme';

import ContactForm from './ContactForm';

describe('ContactForm', () => {
  test('should match the snapshot', () => {
    const props = {
      onCancel() {},
      onSubmit() {},
      onUpdateField() {},
      submitButtonLabel: 'foo',
      formData: {
        name: 'a',
        email: 'b',
        tel: 'c',
        type: 'Private',
        id: 1
      },
    };
    const wrapper = shallow(<ContactForm {...props} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
