import { connect } from 'react-redux';
import { setTimerShow, setTimerCounter } from '../actions';
import Controllers from '../components/Controllers';

const mapStateToProps = state => ({
  counter: state.config.counter,
  timerShow: state.timer.show
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setTimerShow: show => {
    dispatch(setTimerShow(show));
  },
  setTimerCounter: counter => {
    dispatch(setTimerCounter(counter));
  }
});

const ControllersContainer = connect(mapStateToProps, mapDispatchToProps)(
  Controllers
);

export default ControllersContainer;
