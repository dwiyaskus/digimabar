import apiClient from '../apiClient';
import { GET_ARTICLES_FEEDBACK_URL } from './articlesUrl';

const getArticleFeebackApi = (id, from, to) => {
  return apiClient.get(GET_ARTICLES_FEEDBACK_URL(id, from, to));
};

export default getArticleFeebackApi;
