import apiClient from '../apiClient';
import { GET_ARTICLES_URL } from './articlesUrl';

const getArticlesApi = (from, to, filterBy, q) => {
  return apiClient.get(GET_ARTICLES_URL(from, to, filterBy, q));
};

export default getArticlesApi;
