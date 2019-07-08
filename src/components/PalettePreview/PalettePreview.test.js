import React from 'react';
import { shallow } from 'enzyme';
import PalettePreview from './PalettePreview';

describe('PalettePreview', () => {
  let mockColors;
  let wrapper;

  beforeEach(() => {
    mockColors = [
      '#FDC58D', 
      '#FFFFAA', 
      '#95E38A', 
      '#779DF2', 
      '#D2BEFD'
    ]
    wrapper = shallow(
      <PalettePreview
        colors={mockColors}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});