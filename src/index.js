import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <main style={styles}>
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </main>
);

render(<App />, document.getElementById('root'));
