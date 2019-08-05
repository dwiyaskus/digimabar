import apiClient from '../apiClient';
import { GET_DETAIL_ARTICLE_URL } from './articlesUrl';

const getDetailArticlesApi = id => {
  return apiClient.get(GET_DETAIL_ARTICLE_URL(id));
};

export default getDetailArticlesApi;
