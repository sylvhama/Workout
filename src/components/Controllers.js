import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';
import { play, pause, stop } from '../scripts/icons';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  grid-gap: 0 1rem;
`;

const Play = styled(Button)`
  ${props =>
    !props.timerShow && !props.timerPlay ? 'grid-column: 1 / -1;' : null};
`;

export default function Controllers({
  counter,
  timerShow,
  timerPlay,
  setTimerStart,
  setTimerPause,
  setTimerStop
}) {
  return (
    <Nav>
      {!timerPlay ? (
        <Play
          onClick={() => setTimerStart(counter)}
          timerShow={timerShow}
          timerPlay={timerPlay}
        >
          <Icon icon={play} size={32} />
        </Play>
      ) : (
        <Button onClick={setTimerPause}>
          <Icon icon={pause} size={32} />
        </Button>
      )}
      {timerShow && (
        <Button onClick={setTimerStop}>
          <Icon icon={stop} size={32} />
        </Button>
      )}
    </Nav>
  );
}

Controllers.propTypes = {
  counter: PropTypes.number.isRequired,
  timerShow: PropTypes.bool.isRequired,
  timerPlay: PropTypes.bool.isRequired,
  setTimerStart: PropTypes.func.isRequired,
  setTimerPause: PropTypes.func.isRequired,
  setTimerStop: PropTypes.func.isRequired
};
