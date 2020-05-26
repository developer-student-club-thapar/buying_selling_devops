import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  SET_LOADING,
  RESET_STATE,
} from '../types';
import axios from 'axios';
import store from '../store/index';

console.log(store.getState());
const reduxState = store.getState();
//Login User
export const loginUser = accessToken => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING,
    });
    const res = await axios.post(
      `${reduxState.gen.backendEndpoint}/google/auth/token/`,
      {
        token: accessToken,
      },
    );
    console.log(res.data);
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
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

//Login Fail
export const loginFail = error => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};
// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//Reset State
export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};
