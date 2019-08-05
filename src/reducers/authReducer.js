import * as types from '../action/constants/actionTypes';

const initialState = {
  loading: false,
  loginStatus: '',
  logoutAdminStatus: '',
  getProfileData: {},
  getProfileDataStatus: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_LOGIN:
      return { ...state };
    case types.POST_LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        loginStatus: 'failed',
      };
    case types.POST_LOGIN_PENDING:
      return { ...state, loading: true };
    case types.POST_LOGIN_FULFILLED:
      localStorage.setItem('tokenadmin', action.payload.data);
      return {
        ...state,
        loading: false,
        loginStatus: 'success',
      };
    case types.GET_PROFILE:
      return { ...state };
    case types.GET_PROFILE_REJECTED:
      return {
        ...state,
        loading: false,
        getProfileDataStatus: false,
      };
    case types.GET_PROFILE_PENDING:
      return { ...state, loading: true };
    case types.GET_PROFILE_FULFILLED:
      return {
        ...state,
        loading: false,
        getProfileDataStatus: true,
        getProfileData: action.payload.data,
      };
    case types.RESET_LOGIN:
      return {
        ...state,
        loginStatus: '',
        logoutAdminStatus: '',
        getProfileDataStatus: null,
      };
    // case types.LOGOUT:
    //   localStorage.clear();
    //   return { logoutAdminStatus: 'success' };
    default:
      return state;
  }
};

export default reducer;
