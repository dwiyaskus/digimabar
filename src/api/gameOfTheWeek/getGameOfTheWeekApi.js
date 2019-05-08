import apiClient from '../apiClient';
import { GET_GAME_OF_THE_WEEK_URL } from './gameOfTheWeek';

const getGameOfTheWeekApi = () => {
  return apiClient.get(GET_GAME_OF_THE_WEEK_URL);
};

export default getGameOfTheWeekApi;
