import { combineReducers } from 'redux';
import userReducer from './userReducer';
import colorsReducer from './colorsReducer';
import palettesReducer from './palettesReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  colors: colorsReducer,
  palettes: palettesReducer,
  projects: projectsReducer
});

export default rootReducer;