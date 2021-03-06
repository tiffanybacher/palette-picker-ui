const colorsReducer = (state = [{}, {}, {}, {}, {}], action) => {
  switch(action.type) {
    case 'SET_COLORS':
      return action.colors;
    case 'TOGGLE_LOCKED':
      return [...state].map(color => {
        if (color.id === action.id) {
          color.isLocked = !color.isLocked;
        };
        return color;
      });
    default:
      return state;
  };
};

export default colorsReducer;