import apiClient from '../apiClient';
import { PUT_PROFILE_URL } from './authUrl';

const putProfileApi = (id, data) => {
  return apiClient.put(PUT_PROFILE_URL(id), data);
};

export default putProfileApi;
