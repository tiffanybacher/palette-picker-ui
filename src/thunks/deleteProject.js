import * as actions from '../actions';

export const deleteProject = (projectId) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/projects/${projectId}`;
    const init = {
      method: 'DELETE'
    };

    try {
      const response = await fetch(url, init);

      if (!response.ok) {
        throw new Error('Failed to delete project')
      }

      dispatch(actions.deleteProject(projectId));
    } catch (error) {
      console.log({ error });
    }
  }
}