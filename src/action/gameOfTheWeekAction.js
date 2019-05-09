import { GET_GAME_OF_THE_WEEK } from './constants/actionTypes';
import getGameOfTheWeekApi from '../api/gameOfTheWeek/getGameOfTheWeekApi';

export const getGameOfTheWeekAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_GAME_OF_THE_WEEK,
      payload: getGameOfTheWeekApi(),
    });
  };
};
