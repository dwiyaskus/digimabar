import { combineReducers } from 'redux';
import currenciesStore from './currenciesReducer';
const reducers = {
  currenciesStore,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
