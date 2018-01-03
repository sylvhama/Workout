import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MinutesSeconds from './MinutesSeconds';

const H2 = styled.h2`
  font-size: 4.5rem;
  font-weight: bold;
  text-align: center;
  & span {
    padding: 0 0.5rem;
  }
`;

const P = styled.p`
  font-size: 2rem;
  text-align: center;
  ${props => props.hide && 'visibility: hidden;'};
`;

let intervalId;

class Timer extends Component {
  initInterval = () => {
    intervalId = setInterval(() => this.props.decrementInterval(), 1000);
  };

  componentDidMount() {
    this.initInterval();
  }

  componentWillUpdate(nextProps, nextState) {
    const {
      length,
      interval,
      index,
      play,
      incrementIndex,
      setTimerStop
    } = this.props;
    if (interval === 0 && index + 1 === length) {
      clearInterval(intervalId);
      setTimerStop();
    } else if (!nextProps.play) clearInterval(intervalId);
    else if (!play) this.initInterval();
    else if (interval === 0) incrementIndex();
  }

  componentWillUnmount() {
    clearInterval(intervalId);
  }

  render() {
    const { interval, index, length, type } = this.props;
    return (
      <Fragment>
        <P>
          {type === 'start'
            ? '👌 Get Ready'
            : type === 'workout' ? '💪 Workout!' : type === 'rest' && '✋ Rest'}
        </P>
        <H2>
          <MinutesSeconds duration={interval} />
        </H2>
        <P hide={type === 'start'}>{`${index} / ${length - 1}`}</P>
      </Fragment>
    );
  }
}

Timer.propTypes = {
  interval: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  play: PropTypes.bool.isRequired,
  decrementInterval: PropTypes.func.isRequired,
  incrementIndex: PropTypes.func.isRequired
};

export default Timer;
