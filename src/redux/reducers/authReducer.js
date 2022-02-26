import { createReducer } from '@reduxjs/toolkit';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  SET_LOADING,
  RESET_STATE,
} from '../types';

const defaultState = {
  token: null,
  refreshToken: null,
  isAuthenticated: null,
  loading: false,
  user: null,
  error: null,
};

export default (state = defaultState, action) => {
  builder
    .addcase(LOGIN_SUCCESS, (state, action)=>{
      return {
        ...state,
        token: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
        user: action.payload.username,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    })
      .addCase (LOGIN_SUCCESS, (state, action) => {
        return {
          ...state,
          token: action.payload.access_token,
          refreshToken: action.payload.refresh_token,
          user: action.payload.username,
          isAuthenticated: true,
          loading: false,
          error: null,
        };
      })
      .addCase (LOGIN_FAIL)
      .addCase (LOGOUT_USER, (state, action) => { 
        return {
          ...state,
          token: null,
          refreshToken: null,
          isAuthenticated: false,
          loading: false,
          user: null,
          error: action.payload,
        };
      })
      .addCase (SET_LOADING, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase (RESET_STATE, (state, action) => {
        return defaultState;
    })
      .addDefaultCase((state, action) => {
        return state;
      });
};
