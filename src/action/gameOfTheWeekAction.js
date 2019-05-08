import { GET_GAME_OF_THE_WEEK } from './constants/actionTypes';
import getGameOfTheWeekApi from '../api/gameOfTheWeek/getGameOfTheWeekApi';

export const getSpecialReportAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_GAME_OF_THE_WEEK,
      payload: getGameOfTheWeekApi(),
    });
  };
};
