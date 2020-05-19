import AuthReducer from './authReducer';
import { combineReducers } from 'redux';
import genReducer from './genReducer';

export default combineReducers({
  auth: AuthReducer,
  gen: genReducer,
});
