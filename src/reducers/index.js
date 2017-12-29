import { combineReducers } from 'redux';
import timer from './timer';
import nightMode from './nightMode';

const workoutApp = combineReducers({
  timer,
  nightMode
});

export default workoutApp;
