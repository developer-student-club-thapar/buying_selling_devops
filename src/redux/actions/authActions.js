import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_LOADING } from '../types';
import axios from 'axios';
import store from '../store/index';
import ActionButton from 'antd/lib/modal/ActionButton';

console.log(store.getState());
const reduxState = store.getState();
//Login User
export const loginUser = accessToken => async dispatch => {
  try {
    setLoading();
    const res = await axios.post(
      `${reduxState.gen.backendEndpoint}/google/auth/token/`,
      {
        token: accessToken,
      },
    );
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
