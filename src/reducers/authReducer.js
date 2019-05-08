import * as types from '../action/constants/actionTypes';

const initialState = {
  loading: false,
  loginStatus: '',
  logoutAdminStatus: '',
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
    case types.RESET_LOGIN:
      return {
        ...state,
        loginStatus: '',
        logoutAdminStatus: '',
      };
    // case types.LOGOUT:
    //   localStorage.clear();
    //   return { logoutAdminStatus: 'success' };
    default:
      return state;
  }
};

export default reducer;
