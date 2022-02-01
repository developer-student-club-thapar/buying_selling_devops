import { GET_MYPROFILE, GET_PROFILE, PROFILE_ERROR } from '../types';
import {
  PROFILE_ENDPOINT,
  MY_PROFILE_ENDPOINT,
} from '../../constants/endpoints/index';
import { createAction } from '@reduxjs/toolkit';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

//Get my profile
export const getMyProfile = (token) => async (dispatch) => {
  try {
    const res = await fetchBaseQuery({
      baseUrl: `${MY_PROFILE_ENDPOINT}`,
      prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
      },
    });
    const action = createAction(GET_MYPROFILE);
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(PROFILE_ERROR);
    dispatch(action(err.response.data));
  }
};

//Get profile by id
export const getProfile = (id, token) => async (dispatch) => {
  try {
    const res = await fetchBaseQuery({
      baseUrl: `${PROFILE_ENDPOINT}${id}`,
      prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
      },
    });
    const action = createAction(GET_PROFILE);
    dispatch(action(res.data));
  } catch (err) {
    const action = createAction(PROFILE_ERROR);
    dispatch(action(err.response.data));
  }
};
