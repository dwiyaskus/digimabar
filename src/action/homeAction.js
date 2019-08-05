import {
  GET_HEADLINE,
  GET_SPECIAL_REPORT,
  RESET_HOME,
} from './constants/actionTypes';
import getSpecialReportApi from '../api/home/getSpecialReportApi';
import getHeadlineApi from '../api/home/getHeadlineApi';

export const getSpecialReportAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_SPECIAL_REPORT,
      payload: getSpecialReportApi(),
    });
  };
};

export const getHeadlineAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_HEADLINE,
      payload: getHeadlineApi(),
    });
  };
};

export const resetHomeAction = () => {
  return dispatch => {
    return dispatch({
      type: RESET_HOME,
    });
  };
};
