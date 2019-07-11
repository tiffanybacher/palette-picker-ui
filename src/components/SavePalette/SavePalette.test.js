import React from 'react';
import { shallow } from 'enzyme';
import { SavePalette } from './SavePalette';

describe('SavePalette', () => {
  let wrapper;
  let mockProjects;

  beforeEach(() => {
    mockProjects = [
      {
        id: 6,
        name: 'something great',
        user_id: 2
      },
      {
        id: 7,
        name: 'something really great',
        user_id: 2
      }
      ];
    wrapper = shallow(
      <SavePalette projects={mockProjects} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});