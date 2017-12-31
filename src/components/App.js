import React from 'react';
import styled from 'styled-components';
import Wrapper from '../containers/Wrapper';
import SetConfig from '../containers/SetConfig';
import NightModeToggler from '../containers/NightModeToggler';

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

function App() {
  return (
    <Wrapper>
      <Header>
        <NightModeToggler />
      </Header>
      <Main>
        <SetConfig />
      </Main>
      <Footer>
        <NightModeToggler />
      </Footer>
    </Wrapper>
  );
}

export default App;
