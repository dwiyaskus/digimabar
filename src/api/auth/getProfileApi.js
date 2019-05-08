import apiClient from '../apiClient';
import { GET_PROFILE_URL } from './authUrl';

const getProfileApi = () => {
  return apiClient.get(GET_PROFILE_URL);
};

export default getProfileApi;
