import React from 'react';
import { shallow } from 'enzyme';
import { ColorsContainer } from './ColorsContainer';

describe('ColorsContainer', () => {
  let wrapper;
  let mockColors;
  let mockUser;
  let mockSetColors;

  beforeEach(() => {
    mockSetColors = jest.fn();
    mockColors = [
      {
        isLocked: false,
        hexCode: '#cc36de',
        id: 0
      },
      {
        isLocked: false,
        hexCode: '#e3caa7',
        id: 1
      },
      {
        isLocked: false,
        hexCode: '#8da892',
        id: 2
      },
      {
        isLocked: false,
        hexCode: '#3d9168',
        id: 3
      },
      {
        isLocked: false,
        hexCode: '#57798e',
        id: 4
      }
    ];
    mockUser = {}
    wrapper = shallow(
      <ColorsContainer setColors={mockSetColors} colors={mockColors} user={mockUser} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot on conditional rendering', () => {
    mockUser = {
      id: 2,
      username: 'something'
    };
    wrapper = shallow(
      <ColorsContainer colors={mockColors} user={mockUser} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call randomColorGenerator on generateColors', () => {
    wrapper.instance().randomColorGenerator = jest.fn()
    wrapper.instance().generateColors();
    expect(wrapper.instance().randomColorGenerator).toHaveBeenCalled();
  });

  it('should return new hexcodes on generate colors', () => {
    wrapper.instance().randomColorGenerator = jest.fn()
    wrapper.instance().generateColors();
    expect(mockSetColors).toHaveBeenCalled();
  });
});