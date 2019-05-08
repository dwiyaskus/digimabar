import getArticleFeebackApi from '../api/articles/getArticleFeebackApi';
import getArticleReviewApi from '../api/articles/getArticleReviewApi';
import getArticlesApi from '../api/articles/getArticlesApi';
import postArticleFeedbackApi from '../api/articles/postArticleFeedbackApi';
import {
  POST_ARTICLES_FEEDBACK,
  GET_ARTICLES,
  GET_ARTICLES_FEEDBACK,
  GET_ARTICLES_REVIEW,
} from './constants/actionTypes';

export const getArticlesAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_ARTICLES,
      payload: getArticlesApi(),
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
