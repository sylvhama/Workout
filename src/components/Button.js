import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: unset;
  border: 0;
  padding: 0.75rem;
  font-size: 1.5rem;
  background: none;
  cursor: pointer;
`;

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
