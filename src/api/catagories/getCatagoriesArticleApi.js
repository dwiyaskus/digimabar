import apiClient from '../apiClient';
import { GET_CATAGORIES_ARTICLE_URL } from './catagoriesUrl';

const getCatagoriesArticleApi = (from, to) => {
  return apiClient.get(GET_CATAGORIES_ARTICLE_URL(from, to));
};

export default getCatagoriesArticleApi;
