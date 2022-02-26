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
import { createReducer } from '@reduxjs/toolkit';
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

export default createReducer(defaultState, (builder) => {
  builder
    .addCase(GET_ALL_POSTS, (state, action) => {
      return {
        ...state,
        posts: action.payload,
        post: null,
        wishlist: null,
      };
    })
    .addCase(GET_SINGLE_POST, (state, action) => {
      return {
        ...state,
        post: action.payload,
      };
    })
    .addCase(FETCH_CATEGORIES, (state, action) => {
      return {
          ...state,
          categories: action.payload,
        };
    })
    .addCase(FILTER_POSTS, (state, action) => {
      return {
          ...state,
          filteredPosts: action.payload,
        };
    })
    .addCase(CLEAR_FILTER, (state, action) => {
      return {
          ...state,
          filteredPosts: [],
        };
    })
    .addCase(REMOVE_WISHLIST, (state, action) => {
      return {
        ...state,
        wishlist: action.payload,
      };
    })
    .addCase(ADD_WISHLIST, (state, action) => {
      return {
        ...state,
        wishlist: action.payload,
      };
    })
    .addCase(FETCH_WISHLIST, (state, action) => {
      return {
        ...state,
        completeWishlist: action.payload,
      };
    })
    .addCase(POST_ERROR, (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});
