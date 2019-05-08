const GET_CATAGORIES_URL = (from, to) =>
  `/categories?page=${from}&per_page=${to}`;
const GET_CATAGORIES_ARTICLE_URL = (from, to) =>
  `/category/review/article?page=${from}&per_page=${to}`;
export { GET_CATAGORIES_URL, GET_CATAGORIES_ARTICLE_URL };
