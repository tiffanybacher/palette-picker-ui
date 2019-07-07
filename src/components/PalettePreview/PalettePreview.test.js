import React from 'react';
import { shallow } from 'enzyme';
import PalettePreview from './PalettePreview';

describe('PalettePreview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PalettePreview />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});