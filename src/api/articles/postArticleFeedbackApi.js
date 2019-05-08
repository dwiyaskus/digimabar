import apiClient from '../apiClient';
import { POST_ARTICLE_FEEDBACK_URL } from './articlesUrl';

const postArticleFeedbackApi = data => {
  return apiClient.post(POST_ARTICLE_FEEDBACK_URL, data);
};

export default postArticleFeedbackApi;
