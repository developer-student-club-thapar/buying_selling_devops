import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_LOADING } from '../types';

const defaultState = {
  token: null,
  isAuthenticated: null,
  loading: false,
  user: null,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.access_token,
        user: action.payload.username,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return defaultState;
  }
};
