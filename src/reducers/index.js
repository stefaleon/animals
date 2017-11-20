import { combineReducers } from 'redux';
import AnimalReducer from './AnimalReducer';

export default combineReducers({
  animals: AnimalReducer
});
