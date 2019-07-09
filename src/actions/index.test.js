import * as actions from './index';

describe('actions', () => {
  describe('setColors action creator', () => {
    it('should have a type of SET_COLORS', () => {
      const expectedAction = actions.setColors([])
      expect(expectedAction.type).toEqual('SET_COLORS');
    });

    it('should have a property of colors', () => {
      const expectedAction = actions.setColors([]);
      expect(expectedAction.colors).toEqual([]);
    });
  });

  describe('toggleLocked action creator', () => {
    it('should have a type of TOGGLE_LOCKED', () => {
      const expectedAction = actions.toggleLocked(7);
      expect(expectedAction.type).toEqual('TOGGLE_LOCKED');
    });

    it('should have a property of id', () => {
      const expectedAction = actions.toggleLocked(7);
      expect(expectedAction.id).toEqual(7);
    });
  });

  describe('setUser action creator', () => {
    it('should have a type of SET_USER', () => {
      const expectedAction = actions.setUser({});
      expect(expectedAction.type).toEqual('SET_USER');
    });

    it('should have a property of user that matches argument', () => {
      const expectedAction = actions.setUser({});
      expect(expectedAction.user).toEqual({});
    });
  });
});