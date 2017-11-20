import { combineReducers } from 'redux';
import AnimalReducer from './AnimalReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  animals: AnimalReducer,
  selectedAnimalId: SelectionReducer
});
