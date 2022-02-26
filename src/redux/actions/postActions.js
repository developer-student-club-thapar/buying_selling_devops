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
import axios from 'axios';
import {
  POST_ENDPOINT,
  WISHLIST_ENDPOINT,
} from '../../constants/endpoints/index';
import { createAction } from '@reduxjs/toolkit';

//Get all posts
export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${POST_ENDPOINT}`);
    const action = createAction(GET_ALL_POSTS)
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(POST_ERROR)
    dispatch(action(err.response.data));
  }
};

//Get a single post
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${POST_ENDPOINT}${id}`);
    const action = createAction(GET_SINGLE_POST)
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(POST_ERROR)
    dispatch(action(err.response.data));
  }
};

//Fetch all categories
export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(`${POST_ENDPOINT}categories`);
    const action = createAction(FETCH_CATEGORIES)
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(POST_ERROR)
    dispatch(action(err.response.data));
  }
};

//Filter posts by category
export const filterPosts = (filter) => async (dispatch) => {
  try {
    const res = await axios.get(`${POST_ENDPOINT}?category=${filter}`);
    const action = createAction(FILTER_POSTS)
    dispatch(action(res.data));
  } catch (err) {
  
    const action = createAction(POST_ERROR)
    dispatch(action(err.response.data));
  }
};

//Clear Filter
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};

// Add a post to wishlist
export const addToWishlist = (id, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      `${WISHLIST_ENDPOINT}`,
      {
        post: [id],
      },
      config,
    );
    const action = createAction(ADD_WISHLIST)
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(POST_ERROR)
    dispatch(action(err.response.data));
  }
};

// Remove a post from wishlist
export const removeWishlist = (id, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(`${WISHLIST_ENDPOINT}${id}`, config);
    const action = createAction(REMOVE_WISHLIST)
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(POST_ERROR)
    dispatch(action(err.response.data));
  }
};

// Fetch a user's complete wishlist
export const fetchWishlist = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(`${WISHLIST_ENDPOINT}`, config);
    const action = createAction(FETCH_WISHLIST)
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(POST_ERROR)
    dispatch(action(err.response.data));
  }
};
