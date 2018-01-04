import { connect } from 'react-redux';
import {
  decrementTimerInterval,
  incrementTimerIndex,
  setTimerStop,
  setTimerPause
} from '../actions';
import Timer from '../components/Timer';

const mapStateToProps = state => ({
  ...state.timer.intervals[state.timer.index],
  index: state.timer.index,
  length: state.timer.intervals.length,
  pause: state.timer.pause
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  decrementInterval: () => {
    dispatch(decrementTimerInterval());
  },
  incrementIndex: () => {
    dispatch(incrementTimerIndex());
  },
  setTimerStop: () => {
    dispatch(setTimerStop());
  },
  setTimerPause: pause => {
    dispatch(setTimerPause(pause));
  }
});

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default TimerContainer;
