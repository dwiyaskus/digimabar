import {
  POST_LOGIN,
  POST_REGISTER,
  PUT_PROFILE,
  GET_PROFILE,
  RESET_LOGIN,
} from './constants/actionTypes';
import postLoginApi from '../api/auth/postLoginApi';
import postRegisterApi from '../api/auth/postRegisterApi';
import putProfileApi from '../api/auth/putProfileApi';
import getProfileApi from '../api/auth/getProfileApi';

export const postLoginAction = data => {
  return dispatch => {
    return dispatch({
      type: POST_LOGIN,
      payload: postLoginApi(data),
    });
  };
};

export const postRegisterAction = data => {
  return dispatch => {
    return dispatch({
      type: POST_REGISTER,
      payload: postRegisterApi(data),
    });
  };
};

export const putProfileAction = (id, data) => {
  return dispatch => {
    return dispatch({
      type: PUT_PROFILE,
      payload: putProfileApi(id, data),
    });
  };
};

export const getProfileAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_PROFILE,
      payload: getProfileApi(),
    });
  };
};

export const resetLoginAction = () => {
  return dispatch => {
    return dispatch({
      type: RESET_LOGIN,
    });
  };
};
