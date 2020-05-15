import {combineReducers} from 'redux';
import screen_1Reducer from './screen_1Reducer';
import screen_2Reducer from './screen_2Reducer';
import screen_3Reducer from './screen_3Reducer';
import screen_4Reducer from './screen_4Reducer';
import important_Data from './important_Data';

export default combineReducers({
  important_data: important_Data,
  screen_1: screen_1Reducer,
  screen_2: screen_2Reducer,
  screen_3: screen_3Reducer,
  screen_4: screen_4Reducer,
});
