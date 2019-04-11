import * as types from '../constants/actionTypes';

const initialState = {
  currencies: [],
  loading: false,
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CURRENCIES:
      return { ...state };
    case types.GET_CURRENCIES_PENDING:
      return { ...state, loading: true };
    case types.GET_CURRENCIES_FULFILLED:
      return { ...state, currencies: action.payload.data, loading: false };
    default:
      return state;
  }
};

export default reducer;
