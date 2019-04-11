import { GET_CURRENCIES } from '../constants/actionTypes';
import { getCurrenciesApi } from '../api/currenciesApi';

const getCurrencies = () => {
  return dispatch => {
    return dispatch({
      type: GET_CURRENCIES,
      payload: getCurrenciesApi(),
    });
  };
};

export { getCurrencies };
