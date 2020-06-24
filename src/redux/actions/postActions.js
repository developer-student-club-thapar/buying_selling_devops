import {
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  POST_ERROR,
  FETCH_CATEGORIES,
  FILTER_POSTS,
  CLEAR_FILTER,
  ADD_WISHLIST,
  FETCH_WISHLIST,
} from '../types';
import axios from 'axios';
import {
  POST_ENDPOINT,
  WISHLIST_ENDPOINT,
} from '../../constants/endpoints/index';

//Get all posts
export const getAllPosts = () => async dispatch => {
  try {
    const res = await axios.get(`${POST_ENDPOINT}`);
    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data,
    });
  }
};

//Get a single post
export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`${POST_ENDPOINT}${id}`);

    dispatch({
      type: GET_SINGLE_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data,
    });
  }
};

//Fetch all categories
export const fetchCategories = () => async dispatch => {
  try {
    const res = await axios.get(`${POST_ENDPOINT}categories`);

    dispatch({
      type: FETCH_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data,
    });
  }
};

//Filter posts by category
export const filterPosts = filter => async dispatch => {
  try {
    const res = await axios.get(`${POST_ENDPOINT}?category=${filter}`);
    dispatch({
      type: FILTER_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data,
    });
  }
};

//Clear Filter
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};

// Add a post to wishlist
export const addToWishlist = (id, token) => async dispatch => {
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
    dispatch({
      type: ADD_WISHLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data,
    });
  }
};

// Fetch a user's complete wishlist
export const fetchWishlist = token => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(`${WISHLIST_ENDPOINT}`, config);
    dispatch({
      type: FETCH_WISHLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data,
    });
  }
};
