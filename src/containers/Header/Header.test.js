import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  let wrapper;
  let mockUser;

  beforeEach(() => {
    mockUser = {
      id: 2,
      username: 'something'
    };
    wrapper = shallow(
      <Header user={mockUser} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot for no username', () => {
    mockUser = {};
    wrapper = shallow(
      <Header user={mockUser} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});