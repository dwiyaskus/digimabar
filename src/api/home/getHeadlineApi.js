import apiClient from '../apiClient';
import { GET_HEADLINE_URL } from './homeUrl';

const getHeadlineApi = () => {
  return apiClient.get(GET_HEADLINE_URL);
};

export default getHeadlineApi;
