import { GET_MYPROFILE, GET_PROFILE, PROFILE_ERROR } from '../types';
import {createReducer} from '@reduxjs/toolkit'

const defaultState = {
  myProfile: null,
  profile: null,
  error: null,
};

export default createReducer(defaultState, (builder)=>{
  builder
    .addCase(GET_MYPROFILE, (state,action)=>{
      return  {
        ...state,
        myProfile: action.payload,
      };
    })
    .addCase(GET_PROFILE, (state, action)=>{
      return {
        ...state,
        profile: action.payload,
      };
    })
    .addCase(PROFILE_ERROR,(state, action)=>{
      return {
        ...state,
        error: action.payload,
      };
    })
    .addDefaultCase((state, action)=>{
      return state
    })
})
