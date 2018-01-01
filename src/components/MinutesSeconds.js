import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const getMinutes = duration => Math.floor(duration / 60);

const getSeconds = (duration, minutes) => duration - minutes * 60;

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
