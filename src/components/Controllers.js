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
    !props.timerShow && props.timerPause ? 'grid-column: 1 / -1;' : null};
`;

export default function Controllers({
  counter,
  workInterval,
  restInterval,
  timerShow,
  timerPause,
  setTimerStart,
  setTimerPause,
  setTimerStop
}) {
  return (
    <Nav>
      {timerPause ? (
        <Play
          onClick={() => {
            if (!timerShow) {
              const intervals = [{ interval: 5, type: 'start' }];
              for (let i = 0; i < counter; i++) {
                intervals.push({ interval: workInterval, type: 'workout' });
                if (restInterval)
                  intervals.push({ interval: restInterval, type: 'rest' });
              }
              setTimerStart(intervals);
            } else setTimerPause(false);
          }}
          timerShow={timerShow}
          timerPause={timerPause}
        >
          <Icon icon={play} size={32} />
        </Play>
      ) : (
        <Button onClick={() => setTimerPause(true)}>
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
  workInterval: PropTypes.number.isRequired,
  restInterval: PropTypes.number.isRequired,
  timerShow: PropTypes.bool.isRequired,
  timerPause: PropTypes.bool.isRequired,
  setTimerStart: PropTypes.func.isRequired,
  setTimerPause: PropTypes.func.isRequired,
  setTimerStop: PropTypes.func.isRequired
};
