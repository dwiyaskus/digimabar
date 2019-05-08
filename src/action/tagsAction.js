import { GET_TAGS, GET_TAGS_ARTICLES } from './constants/actionTypes';
import getTagsApi from '../api/tags/getTagsApi';
import getTagsArticleApi from '../api/tags/getTagsArticleApi';

export const getTagsAction = (from, to) => {
  return dispatch => {
    return dispatch({
      type: GET_TAGS,
      payload: getTagsApi(from, to),
    });
  };
};

export const getTagsArticleAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_TAGS_ARTICLES,
      payload: getTagsArticleApi(),
    });
  };
};
