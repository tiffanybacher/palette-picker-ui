const colorsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_COLORS':
      return action.colors;
    case 'SET_COLOR':
      return [...state].map(color => {
        if (color.id === action.color.id) {
          return action.color;
        };
        return color;
      });
    default:
      return state;
  };
};

export default colorsReducer;