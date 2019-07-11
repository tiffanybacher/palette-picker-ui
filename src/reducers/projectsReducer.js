const projectsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project]
    case 'SET_PROJECTS':
      return action.projects
    default:
      return state
  };
};

export default projectsReducer;