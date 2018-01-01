import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  & path {
    fill: currentColor;
  }
`;

const Icon = props => {
  return (
    <StyledSvg
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024"
    >
      <path d={props.icon} />
    </StyledSvg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number
};

Icon.defaultProps = {
  size: 16
};

export default Icon;
