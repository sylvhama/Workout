import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.nightMode ? '#333' : '#eaeaea')};
  color: ${props => (props.nightMode ? '#eaeaea' : '#333')};
  transition: background-color ease 0.25s, color ease 0.25s;
`;

const mapStateToProps = state => ({
  nightMode: state.nightMode
});

const Wrapper = connect(mapStateToProps)(StyledMain);

export default Wrapper;
