const GET_ARTICLES_URL = (from, to, filterBy, q) =>
  `/articles?page=${from}&per_page=${to}&filter=${filterBy}&q=${q}`;
const GET_ARTICLE_REVIEW_URL = '/articles/review-game';
const GET_ARTICLES_FEEDBACK_URL = (from, to) =>
  `/articles/2/feedback?page=${from}&per_page=${to}`;
const POST_ARTICLE_FEEDBACK_URL = '/articles/2/feedback';
export {
  GET_ARTICLES_URL,
  GET_ARTICLE_REVIEW_URL,
  GET_ARTICLES_FEEDBACK_URL,
  POST_ARTICLE_FEEDBACK_URL,
};
