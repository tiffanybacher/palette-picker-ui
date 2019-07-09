import colorsReducer from './colorsReducer';
import * as actions from '../actions';

describe('colorsReducer', () => {
  let mockColors;
  beforeEach(() => {
    mockColors = [
      {
        isLocked: false,
        hexCode: "#0572dd",
        id: 0
      },
      {
        isLocked: false,
        hexCode: "#0572dd",
        id: 1
      },
      {
        isLocked: false,
        hexCode: "#0572dd",
        id: 2
      },
      {
        isLocked: false,
        hexCode: "#0572dd",
        id: 3
      },
      {
        isLocked: false,
        hexCode: "#0572dd",
        id: 4
      }
    ];
  });

  it('should return initial state', () => {
    const expected = [{}, {}, {}, {}, {}];
    const result = colorsReducer(undefined, {});
    expect(result).toEqual(expected); 
  });

  it('should be able to set colors', () => {
    const expected = mockColors;
    const result = colorsReducer(undefined, actions.setColors(mockColors));
    expect(result).toEqual(expected)
  });

  it('should be able to toggle a color to locked', () => {
    const expected = mockColors;
    expected[0].isLocked = true;
    const result = colorsReducer(mockColors, actions.toggleLocked(0));
    expect(result).toEqual(expected);
  });
});