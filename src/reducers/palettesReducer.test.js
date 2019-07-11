import palettesReducer from './palettesReducer';
import * as actions from '../actions';


describe('palettesReducer', () => {
  let mockPalettes;

  beforeEach(() => {
    mockPalettes = [
      {
        project_id: 7,
        id: 10,
        name: 'something is awesome',
        colors_array: [
          {
            isLocked: false,
            hexCode: '#6ab78f',
            id: 0
          },
          {
            isLocked: false,
            hexCode: '#f7ad1f',
            id: 1
          },
          {
            isLocked: false,
            hexCode: '#af0491',
            id: 2
          },
          {
            isLocked: false,
            hexCode: '#7ad5f5',
            id: 3
          },
          {
            isLocked: false,
            hexCode: '#56ed7d',
            id: 4
          }
        ]
      },
      {
        project_id: 7,
        id: 11,
        name: 'FN A COTTON FN A',
        colors_array: [
          {
            isLocked: false,
            hexCode: '#6ab78f',
            id: 0
          },
          {
            isLocked: false,
            hexCode: '#f7ad1f',
            id: 1
          },
          {
            isLocked: false,
            hexCode: '#af0491',
            id: 2
          },
          {
            isLocked: false,
            hexCode: '#7ad5f5',
            id: 3
          },
          {
            isLocked: false,
            hexCode: '#56ed7d',
            id: 4
          }
        ]
      }
    ]
  });

  it('should return the default state', () => {
    const expected = [];
    const result = palettesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should be able to set palettes', () => {
    const expected = mockPalettes;
    const result = palettesReducer(undefined, actions.setPalettes(mockPalettes));
    expect(result).toEqual(expected);
  });

  it('should be able to add a palette', () => {
    const expected = [...mockPalettes, mockPalettes[0]];
    const result = palettesReducer(mockPalettes, actions.addPalette(mockPalettes[0]));
    expect(result).toEqual(expected);
  });
});