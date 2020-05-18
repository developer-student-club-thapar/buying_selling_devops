import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_LOADING } from '../types';
import axios from 'axios';

//Login User
export const loginUser = accessToken => async dispatch => {
  try {
    setLoading();
    const res = await axios.post('http://127.0.0.1:8000/google/auth/token/', {
      token: accessToken,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

//Logout User
export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
