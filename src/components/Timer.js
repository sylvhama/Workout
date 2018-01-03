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

  speak(type) {
    let speech;
    switch (type) {
      case 'start':
        speech = 'Get ready.';
        break;
      case 'workout':
        speech = 'Workout!';
        break;
      case 'rest':
        speech = 'Rest.';
        break;
      case 'end':
        speech = 'Good job!';
        break;
      default:
        return;
    }
    const utterance = new SpeechSynthesisUtterance(speech);
    utterance.voice = window.speechSynthesis.getVoices()[4];
    utterance.rate = 1.1;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  }

  componentDidMount() {
    this.initInterval();
    this.speak('start');
  }

  componentWillUpdate(nextProps) {
    const {
      length,
      interval,
      index,
      pause,
      incrementIndex,
      setTimerStop
    } = this.props;
    if (interval === 0 && index + 1 === length) {
      clearInterval(intervalId);
      this.speak('end');
      setTimerStop();
    } else if (nextProps.pause) clearInterval(intervalId);
    else if (pause) this.initInterval();
    else if (interval === 0) incrementIndex();
  }

  componentDidUpdate(prevProps) {
    if (!window.hasOwnProperty('speechSynthesis')) return;
    const { index, type } = this.props;
    if (index !== prevProps.index) this.speak(type);
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
  pause: PropTypes.bool.isRequired,
  decrementInterval: PropTypes.func.isRequired,
  incrementIndex: PropTypes.func.isRequired
};

export default Timer;
