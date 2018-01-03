import { connect } from 'react-redux';
import { setTimerStart, setTimerPause, setTimerStop } from '../actions';
import Controllers from '../components/Controllers';

const mapStateToProps = state => ({
  counter: state.config.counter,
  workInterval: state.config.workInterval,
  restInterval: state.config.restInterval,
  timerShow: state.timer.show,
  timerPause: state.timer.pause
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setTimerStart: intervals => {
    dispatch(setTimerStart(intervals));
  },
  setTimerPause: pause => {
    dispatch(setTimerPause(pause));
  },
  setTimerStop: () => {
    dispatch(setTimerStop());
  }
});

const ControllersContainer = connect(mapStateToProps, mapDispatchToProps)(
  Controllers
);

export default ControllersContainer;
