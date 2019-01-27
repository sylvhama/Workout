import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import throttle from "lodash/throttle";
import AppContainer from "./containers/AppContainer";
import reducer from "./reducers";
import { loadState, cleanState, saveState } from "./scripts/localStorage";
import registerServiceWorker from "./scripts/createServiceWorker.js";

const theme = { color: { light: "#eaeaea", dark: "#333" } };

const store = createStore(reducer, cleanState(loadState() || {}));

store.subscribe(throttle(() => saveState(cleanState(store.getState()))), 1000);

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
