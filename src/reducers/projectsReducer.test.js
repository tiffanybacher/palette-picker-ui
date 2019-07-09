import projectsReducer from './projectsReducer';

describe('projectsReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    const result = projectsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should be able to setUser', () => {

  });
});