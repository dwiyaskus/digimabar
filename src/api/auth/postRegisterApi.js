import apiClient from '../apiClient';
import { POST_REGISTER_URL } from './authUrl';

const postRegisterApi = data => {
  return apiClient.post(POST_REGISTER_URL, data);
};

export default postRegisterApi;
