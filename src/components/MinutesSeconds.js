import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getSeconds, getMinutes } from '../scripts/time';

export default function MinutesSeconds({ duration }) {
  const minutes = getMinutes(duration).toString();
  const seconds = getSeconds(duration, minutes).toString();

  return (
    <Fragment>
      {minutes.length === 1 && '0'}
      {minutes}
      <span>:</span>
      {seconds.length === 1 && '0'}
      {seconds}
    </Fragment>
  );
}

MinutesSeconds.propTypes = {
  duration: PropTypes.number.isRequired
};
