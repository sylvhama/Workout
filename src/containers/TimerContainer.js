import { connect } from 'react-redux';
import { decrementTimerCounter } from '../actions';
import Timer from '../components/Timer';

const mapStateToProps = state => ({
  counter: state.timer.counter,
  workInterval: state.config.workInterval,
  restInterval: state.config.restInterval
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  decrementCounter: () => {
    dispatch(decrementTimerCounter());
  }
});

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default TimerContainer;
