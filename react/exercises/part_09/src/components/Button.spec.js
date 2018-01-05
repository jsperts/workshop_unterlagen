import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  test('Should call onClick when the button is clicked', () => {
    const onClick = jest.fn();

    const wrapper = shallow(<Button onClick={onClick} label="foo" />);
    wrapper.find('button').simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

  test("Should set the button's text to the given label", () => {
    const label = 'foo bar';

    const wrapper = shallow(<Button label={label} />);
    const text = wrapper.find('button').text();

    expect(text).toBe(label);
  });
});
