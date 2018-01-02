import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import MinutesSeconds from './MinutesSeconds';

class Timer extends Component {
  componentDidMount() {}
  componentWillUpdate() {}
  render() {
    const { counter } = this.props;
    return (
      <Fragment>
        <MinutesSeconds />
      </Fragment>
    );
  }
}

export default Timer;
