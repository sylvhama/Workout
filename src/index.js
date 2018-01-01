import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import AppContainer from './containers/AppContainer';
import reducer from './reducers';
import { loadState, cleanState, saveState } from './scripts/localStorage';
const store = createStore(reducer, cleanState(loadState() || {}));

store.subscribe(throttle(() => saveState(cleanState(store.getState()))), 1000);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
