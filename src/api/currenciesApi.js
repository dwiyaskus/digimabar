import apiClient from '../config/apiClient';
import { GET_CURRENCIES_URL } from './apiUrl';

const getCurrenciesApi = () => {
  return apiClient.get(GET_CURRENCIES_URL);
};

export { getCurrenciesApi };
