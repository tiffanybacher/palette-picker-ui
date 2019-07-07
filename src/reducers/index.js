import { combineReducers } from 'redux';
import isLoggedInReducer from './isLoggedInReducer';

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInReducer
});