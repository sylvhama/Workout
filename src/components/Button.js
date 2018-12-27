import styled from "styled-components";

export default styled.button`
  outline: unset;
  border: 0;
  padding: 0.75rem;
  line-height: 1;
  font-size: 1.5rem;
  background: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.25s ease;
  &:active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
