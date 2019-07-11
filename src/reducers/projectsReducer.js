const projectsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project]
    case 'SET_PROJECTS':
      return action.projects
    case 'DELETE_PROJECT':
      return state.filter(project => project.id !== action.projectId)
    default:
      return state
  };
};

export default projectsReducer;