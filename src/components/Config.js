import React, { Fragment } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';
import { plus, minus } from '../icons';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 0.25rem;
  align-items: center;
`;

const Title = styled.h2`
  padding: 1.5rem 0 0.25rem 0;
  line-height: 1;
  font-size: 1.25rem;
  font-weight: normal;
  text-align: center;
  grid-column: 1 / -1;
`;

const Timer = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  & span {
    padding: 0 0.5rem;
  }
`;

const getMinutes = time => Math.floor(time / 60);

const getSeconds = (time, minutes) => time - minutes * 60;

let intervalId;
const interval = (fct = () => {}) => {
  fct();
  intervalId = setTimeout(() => (intervalId = setInterval(fct, 100)), 500);
};

export default function Config({
  decrementCounter,
  incrementCounter,
  counter,
  incrementWorkInterval,
  decrementWorkInterval,
  workInterval,
  decrementRestInterval,
  incrementRestInterval,
  restInterval
}) {
  const workIntervalMin = getMinutes(workInterval).toString();
  const workIntervalSec = getSeconds(workInterval, workIntervalMin).toString();
  const restIntervalMin = getMinutes(restInterval).toString();
  const restIntervalSec = getSeconds(restInterval, restIntervalMin).toString();
  return (
    <Fragment>
      <Row>
        <Title>How many work intervals?</Title>
        <Button
          onMouseUp={() => clearInterval(intervalId)}
          onMouseDown={() => interval(decrementCounter)}
        >
          <Icon icon={minus} />
        </Button>
        <Timer>{counter}</Timer>
        <Button
          onMouseUp={() => clearInterval(intervalId)}
          onMouseDown={() => interval(incrementCounter)}
        >
          <Icon icon={plus} />
        </Button>
      </Row>
      <Row>
        <Title>Work interval</Title>
        <Button
          onMouseUp={() => clearInterval(intervalId)}
          onMouseDown={() => interval(decrementWorkInterval)}
        >
          <Icon icon={minus} />
        </Button>
        <Timer>
          {workIntervalMin.length === 1 ? '0' : null}
          {workIntervalMin}
          <span>:</span>
          {workIntervalSec.length === 1 ? '0' : null}
          {workIntervalSec}
        </Timer>
        <Button
          onMouseUp={() => clearInterval(intervalId)}
          onMouseDown={() => interval(incrementWorkInterval)}
        >
          <Icon icon={plus} />
        </Button>
      </Row>
      <Row>
        <Title>Rest interval</Title>
        <Button
          onMouseUp={() => clearInterval(intervalId)}
          onMouseDown={() => interval(decrementRestInterval)}
        >
          <Icon icon={minus} />
        </Button>
        <Timer>
          {restIntervalMin.length === 1 ? '0' : null}
          {restIntervalMin}
          <span>:</span>
          {restIntervalSec.length === 1 ? '0' : null}
          {restIntervalSec}
        </Timer>
        <Button
          onMouseUp={() => clearInterval(intervalId)}
          onMouseDown={() => interval(incrementRestInterval)}
        >
          <Icon icon={plus} />
        </Button>
      </Row>
    </Fragment>
  );
}
