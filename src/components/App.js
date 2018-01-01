import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '../containers/Wrapper';
import SetConfig from '../containers/SetConfig';
import NightModeToggler from '../containers/NightModeToggler';
import TimerContainer from '../containers/TimerContainer';
import ControllersContainer from '../containers/ControllersContainer';

const Header = styled.header`
  display: grid;
  justify-content: end;
  align-content: start;
`;

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Footer = styled.footer`
  display: grid;
  justify-content: center;
  align-content: center;
`;

function App({ timerShow }) {
  return (
    <Wrapper>
      <Header>
        <NightModeToggler />
      </Header>
      <Main>{timerShow ? <TimerContainer /> : <SetConfig />}</Main>
      <Footer>
        <ControllersContainer />
      </Footer>
    </Wrapper>
  );
}

App.propTypes = {
  timerShow: PropTypes.bool.isRequired
};

export default App;
