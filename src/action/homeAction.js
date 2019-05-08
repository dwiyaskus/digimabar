import { GET_HEADLINE, GET_SPECIAL_REPORT } from './constants/actionTypes';
import getSpecialReportApi from '../api/home/getSpecialReportApi';
import getHeadlineApi from '../api/home/getHeadlineApi';

export const getSpecialReportAction = (from, to) => {
  return dispatch => {
    return dispatch({
      type: GET_SPECIAL_REPORT,
      payload: getSpecialReportApi(from, to),
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
