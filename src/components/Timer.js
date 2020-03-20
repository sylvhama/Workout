import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MinutesSeconds from "./MinutesSeconds";
import { getSeconds, getMinutes } from "../scripts/time";

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
  ${props => props.hide && "visibility: hidden;"};
`;

let intervalId;

class Timer extends Component {
  initInterval = () => {
    intervalId = setInterval(() => this.props.decrementInterval(), 1000);
  };

  onBlur = () => this.props.setTimerPause(true);

  speak(type) {
    let speech;
    switch (type) {
      case "start":
        speech = "Get ready.";
        break;
      case "workout":
        speech = "Workout!";
        break;
      case "rest":
        speech = "Rest.";
        break;
      case "end":
        speech = "Good job!";
        break;
      default:
        return;
    }
    const utterance = new SpeechSynthesisUtterance(speech);
    utterance.rate = 1.1;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  }

  componentDidMount() {
    this.initInterval();
    window.addEventListener("blur", this.onBlur);
    this.speak("start");
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
      this.speak("end");
      setTimerStop();
    } else if (nextProps.pause) clearInterval(intervalId);
    else if (pause) this.initInterval();
    else if (interval === 0) incrementIndex();
  }

  componentDidUpdate(prevProps) {
    if (!window.hasOwnProperty("speechSynthesis")) return;
    const { index, type } = this.props;
    if (index !== prevProps.index) this.speak(type);
  }

  componentWillUnmount() {
    clearInterval(intervalId);
    window.removeEventListener("blur", this.onBlur);
  }

  render() {
    const { interval, index, length, type, hasRests } = this.props;

    const minutes = getMinutes(interval).toString();
    const seconds = getSeconds(interval, minutes).toString();

    return (
      <Fragment>
        <P>
          {type === "start"
            ? "👌 Get Ready"
            : type === "workout"
            ? "💪 Workout!"
            : type === "rest" && "✋ Rest"}
        </P>
        <H2>
          <MinutesSeconds minutes={minutes} seconds={seconds} />
        </H2>
        <P hide={type === "start"}>
          {" "}
          {hasRests
            ? `${Math.round(index / 2)} / ${Math.round((length - 1) / 2)}`
            : `${index} / ${length - 1}`}
        </P>
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
  hasRests: PropTypes.bool.isRequired,
  decrementInterval: PropTypes.func.isRequired,
  incrementIndex: PropTypes.func.isRequired,
  setTimerStop: PropTypes.func.isRequired,
  setTimerPause: PropTypes.func.isRequired
};

export default Timer;
