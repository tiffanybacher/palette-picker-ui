import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_COLORS', () => {
    const expectedAction = actions.setColors([])
    expect(expectedAction.type).toEqual('SET_COLORS');
  });

  it('should have a type of SET_COLORS', () => {
    const expectedAction = actions.setColors([]);
    expect(expectedAction.colors).toEqual([]);
  });

  it('should have a type of ')
});