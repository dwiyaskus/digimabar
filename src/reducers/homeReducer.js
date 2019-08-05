import * as types from '../action/constants/actionTypes';

const initialState = {
  loading: false,
  articlesStatus: null,
  articles: [],
  specialReportStatus: null,
  specialReport: {},
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
    case types.GET_SPECIAL_REPORT:
      return { ...state };
    case types.GET_SPECIAL_REPORT_REJECTED:
      return {
        ...state,
        loading: false,
        specialReportStatus: false,
      };
    case types.GET_SPECIAL_REPORT_PENDING:
      return { ...state, loading: true };
    case types.GET_SPECIAL_REPORT_FULFILLED:
      return {
        ...state,
        loading: false,
        specialReportStatus: true,
        specialReport: action.payload.data,
      };

    case types.RESET_HOME:
      return {
        ...state,
        articlesStatus: null,
        specialReportStatus: null,
      };
    default:
      return state;
  }
};

export default reducer;
