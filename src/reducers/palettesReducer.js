const palettesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PALETTES':
      return action.palettes
    case 'ADD_PALETTE':
      return [...state, action.palette]
    case 'DELETE_PALETTE':
      return state.filter(palette => palette.id !== action.paletteId)
    default:
      return state
  };
};

export default palettesReducer;