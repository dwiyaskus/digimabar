import apiClient from '../apiClient';
import { GET_ARTICLE_REVIEW_URL } from './articlesUrl';

const getArticleReviewApi = () => {
  return apiClient.get(GET_ARTICLE_REVIEW_URL);
};

export default getArticleReviewApi;
