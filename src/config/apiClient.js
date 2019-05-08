// import { API_ROOT } from './envUrl';
import axios from 'axios';

const apiClient = axios.create({
  //baseURL: API_ROOT,
  baseURL: 'http://api-digimdigim.neotenstudio.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
