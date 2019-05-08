import apiClient from '../apiClient';
import { GET_TAGS_URL } from './tagsUrl';

const getTagsArticleApi = () => {
  return apiClient.get(GET_TAGS_URL);
};

export default getTagsArticleApi;
