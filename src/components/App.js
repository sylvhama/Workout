import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import SetConfig from "../containers/SetConfig";
import NightModeToggler from "../containers/NightModeToggler";
import TimerContainer from "../containers/TimerContainer";
import ControllersContainer from "../containers/ControllersContainer";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px auto 100px;
  background-color: ${props =>
    props.nightMode ? props.theme.color.dark : props.theme.color.light};
  color: ${props =>
    props.nightMode ? props.theme.color.light : props.theme.color.dark};
  transition: background-color ease 0.25s, color ease 0.25s;
`;

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

const metaThemeColor = document.querySelector("meta[name=theme-color]");

class App extends React.Component {
  setMetaThemeColor = () => {
    const { nightMode, theme } = this.props;
    metaThemeColor.setAttribute(
      "content",
      nightMode ? theme.color.dark : theme.color.light
    );
  };

  componentDidUpdate(prevProps) {
    const { nightMode } = this.props;
    if (nightMode !== prevProps.nightMode) this.setMetaThemeColor();
  }

  componentDidMount() {
    this.setMetaThemeColor();
  }

  render() {
    const { nightMode, timerShow } = this.props;

    return (
      <Wrapper nightMode={nightMode}>
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
}

App.propTypes = {
  timerShow: PropTypes.bool.isRequired
};

export default withTheme(App);
