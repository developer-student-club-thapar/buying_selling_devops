import {
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  GET_USER_POSTS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  ADD_POST_IMAGE,
  POST_ERROR,
} from '../types';
import axios from 'axios';
import { POST_ENDPOINT } from '../../constants/endpoints/index';
import store from '../store/index';

const state = store.getState();
console.log(state);

//Get all posts
export const getAllPosts = () => async dispatch => {
  try {
  } catch (err) {}
};

//Get a single post
export const getPost = id => async dispatch => {
  const config = {
    headers: {
      AUTHORIZATION: `Bearer ${state.auth.token}`,
    },
  };
  try {
    const res = await axios.get(`${POST_ENDPOINT}${id}`);
    console.log(res.data);
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
