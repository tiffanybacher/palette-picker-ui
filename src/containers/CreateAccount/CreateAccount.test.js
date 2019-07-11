import React from 'react';
import { shallow } from 'enzyme';
import { CreateAccount } from './CreateAccount';

describe('CreateAccount', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CreateAccount />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});