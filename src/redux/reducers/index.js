import AuthReducer from './authReducer';
import PostReducer from './postReducer';
import UserReducer from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: AuthReducer,
  posts: PostReducer,
  user: UserReducer,
});
