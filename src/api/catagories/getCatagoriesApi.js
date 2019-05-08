import apiClient from '../apiClient';
import { GET_CATAGORIES_ARTICLE_URL } from './catagoriesUrl';

const getCatagoriesApi = (from, to) => {
  return apiClient.get(GET_CATAGORIES_ARTICLE_URL(from, to));
};

export default getCatagoriesApi;
