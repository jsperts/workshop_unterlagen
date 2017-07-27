import React from 'react';
import { shallow } from 'enzyme';

import Click from './Click';

describe('Click', () => {
  test('Should call onIncrement when the button is clicked', () => {
    const onIncrement = jest.fn();

    const wrapper = shallow(<Click onIncrement={onIncrement} />);

    wrapper.find('button').simulate('click');

    expect(onIncrement).toHaveBeenCalled();
  });

  test('Should match the snapshot', () => {
    const wrapper = shallow(<Click />);
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
