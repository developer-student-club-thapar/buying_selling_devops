import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  SET_LOADING,
  RESET_STATE,
} from '../types';
import axios from 'axios';
import { AUTH_ENDPOINT } from '../../constants/endpoints/index';

//Login User
export const loginUser = (accessToken) => async (dispatch) => {
  try {
    const res = await axios.post(`${AUTH_ENDPOINT}`, {
      token: accessToken,
    });
    console.log(res.data);
    if (res.data.error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: res.data.error,
      });
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    }
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
export const loginFail = (error) => {
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
