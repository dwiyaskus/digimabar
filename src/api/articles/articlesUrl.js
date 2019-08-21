const GET_ARTICLES_URL = (from, to, filterBy, q) =>
  `/articles?page=${from}&per_page=${to}&filter=${filterBy}&q=${q}`;
const GET_ARTICLE_REVIEW_URL = '/articles/review-game';
const GET_ARTICLES_FEEDBACK_URL = (id, from, to) =>
  `/articles/${id}/feedback?page=${from}&per_page=${to}`;
const POST_ARTICLE_FEEDBACK_URL = id => `/articles/${id}/feedback`;
const GET_DETAIL_ARTICLE_URL = Id => `/articles/${Id}`;
export {
  GET_ARTICLES_URL,
  GET_ARTICLE_REVIEW_URL,
  GET_ARTICLES_FEEDBACK_URL,
  POST_ARTICLE_FEEDBACK_URL,
  GET_DETAIL_ARTICLE_URL,
};
