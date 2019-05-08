import apiClient from '../apiClient';
import { GET_ARTICLES_FEEDBACK_URL } from './articlesUrl';

const getArticleFeebackApi = (from, to) => {
  return apiClient.get(GET_ARTICLES_FEEDBACK_URL(from, to));
};

export default getArticleFeebackApi;
