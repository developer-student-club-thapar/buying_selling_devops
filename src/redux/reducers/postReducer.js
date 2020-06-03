import {
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  GET_USER_POSTS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  ADD_POST_IMAGE,
  POST_ERROR,
  FETCH_CATEGORIES,
} from '../types';

const defaultState = {
  posts: null,
  post: null,
  userposts: null,
  categories: null,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
        post: null,
      };
    case GET_SINGLE_POST:
      return {
        ...state,
        post: action.payload,
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
