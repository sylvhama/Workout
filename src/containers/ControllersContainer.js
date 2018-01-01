import { connect } from 'react-redux';
import {
  setTimerStart,
  setTimerPause,
  setTimerStop,
  decrementTimerCounter
} from '../actions';
import Controllers from '../components/Controllers';

const mapStateToProps = state => ({
  counter: state.config.counter,
  timerShow: state.timer.show,
  timerPlay: state.timer.play
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setTimerStart: () => {
    dispatch(setTimerStart());
  },
  setTimerPause: () => {
    dispatch(setTimerPause());
  },
  setTimerStop: () => {
    dispatch(setTimerStop());
  },
  decrementTimerCounter: counter => {
    dispatch(decrementTimerCounter());
  }
});

const ControllersContainer = connect(mapStateToProps, mapDispatchToProps)(
  Controllers
);

export default ControllersContainer;
