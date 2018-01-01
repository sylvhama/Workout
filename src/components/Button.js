import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: unset;
  border: 0;
  padding: 0.75rem;
  font-size: 1.5rem;
  background: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.25s ease;
  &:active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
