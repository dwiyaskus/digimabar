import getArticleFeebackApi from '../api/articles/getArticleFeebackApi';
import getArticleReviewApi from '../api/articles/getArticleReviewApi';
import getArticlesApi from '../api/articles/getArticlesApi';
import postArticleFeedbackApi from '../api/articles/postArticleFeedbackApi';
import {
  POST_ARTICLES_FEEDBACK,
  GET_ARTICLES,
  GET_ARTICLES_FEEDBACK,
  GET_ARTICLES_REVIEW,
  RESET_ARTICLES,
  GET_DETAIL_ARTICLES,
} from './constants/actionTypes';
import getDetailArticlesApi from '../api/articles/getDetailArticleApi';

export const getArticlesAction = (from, to, filterBy, q) => {
  return dispatch => {
    return dispatch({
      type: GET_ARTICLES,
      payload: getArticlesApi(from, to, filterBy, q),
    });
  };
};

export const getArticleFeebackAction = (from, to) => {
  return dispatch => {
    return dispatch({
      type: GET_ARTICLES_FEEDBACK,
      payload: getArticleFeebackApi(from, to),
    });
  };
};

export const getArticleReviewAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_ARTICLES_REVIEW,
      payload: getArticleReviewApi(),
    });
  };
};

export const postArticleFeedback = data => {
  return dispatch => {
    return dispatch({
      type: POST_ARTICLES_FEEDBACK,
      payload: postArticleFeedbackApi(data),
    });
  };
};

export const resetArticlesAction = () => {
  return dispatch => {
    return dispatch({
      type: RESET_ARTICLES,
    });
  };
};

export const getDetailArticlesAction = id => {
  return dispatch => {
    return dispatch({
      type: GET_DETAIL_ARTICLES,
      payload: getDetailArticlesApi(id),
    });
  };
};
