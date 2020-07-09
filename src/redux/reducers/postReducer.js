import {
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  POST_ERROR,
  FETCH_CATEGORIES,
  FILTER_POSTS,
  CLEAR_FILTER,
  ADD_WISHLIST,
  FETCH_WISHLIST,
  REMOVE_WISHLIST,
} from '../types';

const defaultState = {
  posts: null,
  filteredPosts: [],
  post: null,
  userposts: null,
  categories: null,
  wishlist: null,
  completeWishlist: null,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
        post: null,
        wishlist: null,
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
    case FILTER_POSTS:
      return {
        ...state,
        filteredPosts: action.payload,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredPosts: [],
      };
    case REMOVE_WISHLIST:
    case ADD_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case FETCH_WISHLIST:
      return {
        ...state,
        completeWishlist: action.payload,
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
