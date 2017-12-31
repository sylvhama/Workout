import { combineReducers } from 'redux';
import config from './config';
import nightMode from './nightMode';

const workoutApp = combineReducers({
  config,
  nightMode
});

export default workoutApp;
