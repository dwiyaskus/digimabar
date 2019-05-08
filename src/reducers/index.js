import { combineReducers } from 'redux';
import articlesStore from './articlesReducer';
import authStore from './authReducer';
import catagoriesStore from './catagoriesReducer';
import gameOfWeekStore from './gameOfTheWeekReducer';
import tagsStore from './tagsReducer';
import homeStore from './homeReducer';

const reducers = {
  articlesStore,
  authStore,
  catagoriesStore,
  gameOfWeekStore,
  tagsStore,
  homeStore,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
