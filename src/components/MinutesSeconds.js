import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function MinutesSeconds({ minutes, seconds }) {
  return (
    <Fragment>
      {minutes.length === 1 && "0"}
      {minutes}
      <span>:</span>
      {seconds.length === 1 && "0"}
      {seconds}
    </Fragment>
  );
}

MinutesSeconds.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired
};
