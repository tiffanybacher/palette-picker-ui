import palettesReducer from './palettesReducer';

describe('palettesReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    const result = palettesReducer(undefined, {});
    expect(result).toEqual(expected);
  });
});