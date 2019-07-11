import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('Login', () => {
  let wrapper;
  let mockUser;

  beforeEach(() => {
    mockUser = {
      id: 2,
      username: 'something'
    };
    wrapper = shallow(
      <Login user={mockUser} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot on conditional rendering', () => {
    mockUser = {};
    wrapper = shallow(
      <Login user={mockUser}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    let defaultState = {
      username: '',
      password: '',
      error: ''
    };
    expect(wrapper.state()).toEqual(defaultState);
  });
});