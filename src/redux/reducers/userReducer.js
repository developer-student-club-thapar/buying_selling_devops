import { GET_MYPROFILE, GET_PROFILE, PROFILE_ERROR } from '../types';

const defaultState = {
  myProfile: null,
  profile: null,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_MYPROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
