import { GET_MYPROFILE, GET_PROFILE, PROFILE_ERROR } from '../types';
import axios from 'axios';
import {
  PROFILE_ENDPOINT,
  MY_PROFILE_ENDPOINT,
} from '../../constants/endpoints/index';
import { createAction } from '@reduxjs/toolkit';

//Get my profile
export const getMyProfile = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(`${MY_PROFILE_ENDPOINT}`, config);
    const action = createAction(GET_MYPROFILE);
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(PROFILE_ERROR);
    dispatch(action(err.response.data));
  }
};

//Get profile by id
export const getProfile = (id, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(`${PROFILE_ENDPOINT}${id}`, config);
    const action = createAction(GET_PROFILE);
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(PROFILE_ERROR);
    dispatch(action(err.response.data));
  }
};
