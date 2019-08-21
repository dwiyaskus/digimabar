import apiClient from '../apiClient';
import { PUT_PROFILE_URL } from './authUrl';

const putProfileApi = data => {
  return apiClient.post(PUT_PROFILE_URL, data);
};

export default putProfileApi;
