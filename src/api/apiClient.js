import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://api-digimdigim.neotenstudio.com/',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('tokenadmin'),
    'Content-Type': 'application/json',
  },
});

export default apiClient;
