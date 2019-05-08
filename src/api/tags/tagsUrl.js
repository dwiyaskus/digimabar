const GET_TAGS_URL = (from, to) => `/tags?page=${from}&per_page=${to}`;
const GET_TAGS_ARTICLE_URL = `/tags/action/article`;
export { GET_TAGS_URL, GET_TAGS_ARTICLE_URL };
