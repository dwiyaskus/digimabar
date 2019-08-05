import * as types from '../action/constants/actionTypes';

const initialState = {
  loading: false,
  detailArticleStatus: null,
  detailArticle: {},
  getArticleSearch: [],
  getArticleSearchStatus: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DETAIL_ARTICLES:
      return { ...state };
    case types.GET_DETAIL_ARTICLES_REJECTED:
      return {
        ...state,
        loading: false,
        detailArticleStatus: false,
      };
    case types.GET_DETAIL_ARTICLES_PENDING:
      return { ...state, loading: true };
    case types.GET_DETAIL_ARTICLES_FULFILLED:
      return {
        ...state,
        loading: false,
        detailArticleStatus: true,
        detailArticle: action.payload.data,
      };
    case types.GET_ARTICLES:
      return { ...state };
    case types.GET_ARTICLES_REJECTED:
      return {
        ...state,
        loading: false,
        getArticleSearchStatus: false,
      };
    case types.GET_ARTICLES_PENDING:
      return { ...state, loading: true };
    case types.GET_ARTICLES_FULFILLED:
      return {
        ...state,
        loading: false,
        getArticleSearchStatus: true,
        getArticleSearch: action.payload.data,
      };

    case types.RESET_ARTICLES:
      return {
        ...state,
        detailArticleStatus: null,
        getArticleSearchStatus: null,
      };
    default:
      return state;
  }
};

export default reducer;
