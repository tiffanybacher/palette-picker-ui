import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Color toggleLocked={jest.fn()} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call toggleLocked on click', () => {
    wrapper.find('#locked').simulate('click');
    expect(wrapper.instance().toggleLocked).toHaveBeenCalled();
  });
});