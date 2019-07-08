import { combineReducers } from 'redux';
import isLoggedInReducer from './isLoggedInReducer';
import colorsReducer from './colorsReducer';

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInReducer,
  colors: colorsReducer
});

export default rootReducer;