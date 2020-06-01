import AuthReducer from './authReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: AuthReducer,
});
