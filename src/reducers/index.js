import { combineReducers } from 'redux';
import config from './config';
import timer from './timer';
import nightMode from './nightMode';

const workoutApp = combineReducers({
  config,
  timer,
  nightMode
});

export default workoutApp;
