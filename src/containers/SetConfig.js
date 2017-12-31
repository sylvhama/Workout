import React from 'react';
import { connect } from 'react-redux';
import {
  resetConfig,
  decrementCounter,
  incrementCounter,
  incrementWorkInterval,
  decrementWorkInterval,
  decrementRestInterval,
  incrementRestInterval
} from '../actions';
import Config from '../components/Config';

const mapStateToProps = ({ config }) => ({
  counter: config.counter,
  workInterval: config.workInterval,
  restInterval: config.restInterval
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetConfig: () => {
    dispatch(resetConfig());
  },
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
