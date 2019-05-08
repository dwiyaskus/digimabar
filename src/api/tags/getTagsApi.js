import apiClient from '../apiClient';
import { GET_TAGS_URL } from './tagsUrl';

const getTagsApi = (from, to) => {
  return apiClient.get(GET_TAGS_URL(from, to));
};

export default getTagsApi;
