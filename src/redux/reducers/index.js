import AuthReducer from './authReducer';
import PostReducer from './postReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: AuthReducer,
  posts: PostReducer,
});
