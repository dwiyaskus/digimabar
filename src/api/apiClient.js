import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://api-digimdigim.neotenstudio.com/',
  // headers: {
  //   Authorization: 'Bearer ' + localStorage.getItem('tokenadmin'),
  //   'Content-Type': 'application/json',
  // },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default apiClient;
