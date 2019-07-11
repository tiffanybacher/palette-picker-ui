import projectsReducer from './projectsReducer';
import * as actions from '../actions';

describe('projectsReducer', () => {
  let mockProjects;
  let mockProject;

  beforeEach(() => {
    mockProjects = [
      {
        id: 6,
        name: 'something great',
        user_id: 2
      },
      {
        id: 7,
        name: 'something really great',
        user_id: 2
      },
      {
        id: 8,
        name: 'all the things 1',
        user_id: 2
      }
    ];
    mockProject = {
      id: 10,
      name: 'all the things 2',
      user_id: 2
    };
  });

  it('should return the default state', () => {
    const expected = [];
    const result = projectsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should be able to set projects', () => {
    const expected = mockProjects;
    const result = projectsReducer([], actions.setProjects(mockProjects));
    expect(result).toEqual(expected);
  });

  it('should be able to add a project', () => {
    const expected = [...mockProjects, mockProject];
    const result = projectsReducer(mockProjects, actions.addProject(mockProject));
    expect(result).toEqual(expected);
  });
});