import React from 'react';
import { connect } from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
  incrementWorkInterval,
  decrementWorkInterval,
  decrementRestInterval,
  incrementRestInterval
} from '../actions';
import Config from '../components/Config';

const mapStateToProps = ({ timer }) => ({
  counter: timer.counter,
  workInterval: timer.workInterval,
  restInterval: timer.restInterval
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  decrementCounter: () => {
    dispatch(decrementCounter());
  },
  incrementCounter: () => {
    dispatch(incrementCounter());
  },
  incrementWorkInterval: () => {
    dispatch(incrementWorkInterval());
  },
  decrementWorkInterval: () => {
    dispatch(decrementWorkInterval());
  },
  decrementRestInterval: () => {
    dispatch(decrementRestInterval());
  },
  incrementRestInterval: () => {
    dispatch(incrementRestInterval());
  }
});

const SetConfig = connect(mapStateToProps, mapDispatchToProps)(Config);

export default SetConfig;
