import { connect } from 'react-redux';
import { decrementTimerInterval, decrementTimerIndex } from '../actions';
import Timer from '../components/Timer';

const mapStateToProps = state => ({
  {...state.timer.intervals[state.timer.index]},
  counter: state.config.counter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  decrementInterval: () => {
    dispatch(decrementTimerInterval());
  },
  decrementIndex: () => {
    dispatch(decrementTimerIndex());
  }
});

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default TimerContainer;
