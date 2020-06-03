import { GET_MYPROFILE, GET_PROFILE, PROFILE_ERROR } from '../types';
import axios from 'axios';
import { PROFILE_ENDPOINT } from '../../constants/endpoints/index';
import store from '../store';

const state = store.getState();
console.log(state);
if (state.auth.token) console.log(state.auth.token);

//Get my profile
export const getMyProfile = () => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${state.auth.token}`,
    },
  };
  try {
    const res = await axios.get(`${PROFILE_ENDPOINT}myprofile`, config);
    dispatch({
      type: GET_MYPROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.data,
    });
  }
};

//Get a profile by id
export const getProfile = id => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${state.auth.token}`,
    },
  };
  try {
    const res = await axios.get(`${PROFILE_ENDPOINT}${id}`, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.data,
    });
  }
};
