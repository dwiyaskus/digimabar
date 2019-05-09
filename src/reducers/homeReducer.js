import * as types from '../action/constants/actionTypes';

const initialState = {
  loading: false,
  articlesStatus: null,
  articles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HEADLINE:
      return { ...state };
    case types.GET_HEADLINE_REJECTED:
      return {
        ...state,
        loading: false,
        articlesStatus: false,
      };
    case types.GET_HEADLINE_PENDING:
      return { ...state, loading: true };
    case types.GET_HEADLINE_FULFILLED:
      return {
        ...state,
        loading: false,
        articlesStatus: true,
        articles: action.payload.data,
      };
    case types.RESET_HOME:
      return {
        ...state,
        articlesStatus: null,
      };
    default:
      return state;
  }
};

export default reducer;
