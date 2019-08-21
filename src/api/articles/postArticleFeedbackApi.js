import apiClient from '../apiClient';
import { POST_ARTICLE_FEEDBACK_URL } from './articlesUrl';

const postArticleFeedbackApi = (id, data) => {
  return apiClient.post(POST_ARTICLE_FEEDBACK_URL(id), data);
};

export default postArticleFeedbackApi;
