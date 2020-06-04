import { GET_MYPROFILE, GET_PROFILE, PROFILE_ERROR } from '../types';
import axios from 'axios';
import { PROFILE_ENDPOINT } from '../../constants/endpoints/index';

//Get my profile
export const getMyProfile = token => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
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
export const getProfile = (id, token) => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
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
