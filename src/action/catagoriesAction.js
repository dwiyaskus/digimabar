import {
  GET_CATAGORIES,
  GET_CATAGORIES_ARTICLES,
} from './constants/actionTypes';
import getCatagoriesApi from '../api/catagories/getCatagoriesApi';
import getCatagoriesArticleApi from '../api/catagories/getCatagoriesArticleApi';

export const getCatagorieskAction = (from, to) => {
  return dispatch => {
    return dispatch({
      type: GET_CATAGORIES,
      payload: getCatagoriesApi(from, to),
    });
  };
};

export const getCatagoriesArticleAction = (from, to) => {
  return dispatch => {
    return dispatch({
      type: GET_CATAGORIES_ARTICLES,
      payload: getCatagoriesArticleApi(from, to),
    });
  };
};
