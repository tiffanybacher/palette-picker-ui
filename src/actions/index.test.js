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

  describe('setProjects', () => {
    it('should have a type of setProjects', () => {
      const expectedAction = actions.setProjects();
      expect(expectedAction.type).toEqual('SET_PROJECTS');
    });

    it('should have a property of projects with a value matching arguement passed in', () => {
      const expectedAction = actions.setProjects([]);
      expect(expectedAction.projects).toEqual([]);
    });
  });

  describe('setPalettes', () => {
    it('should have a type of SET_PALETTES', () => {
      const expectedAction = actions.setPalettes();
      expect(expectedAction.type).toEqual('SET_PALETTES');
    });

    it('should have a property of palettes with a value matching arguement passed in', () => {
      const expectedAction = actions.setPalettes([]);
      expect(expectedAction.palettes).toEqual([]);
    });
  });

  describe('addProject', () => {
    it('should have a type of ADD_PROJECT', () => {
      const expectedAction = actions.addProject({});
      expect(expectedAction.type).toEqual('ADD_PROJECT');
    });

    it('should have a property project that equals the argument passed', () => {
      const expectedAction = actions.addProject({});
      expect(expectedAction.project).toEqual({});
    });
  });

  describe('addPalette', () => {
    it('should have a type of ADD_PALETTE', () => {
      const expectedAction = actions.addPalette({});
      expect(expectedAction.type).toEqual('ADD_PALETTE');
    });

    it('should have a property palette that equals the argument passed', () => {
      const expectedAction = actions.addPalette({});
      expect(expectedAction.palette).toEqual({});
    });
  });
});