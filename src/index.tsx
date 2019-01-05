// modules
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// custom
import App from './App';

const root = document.getElementById('app-root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./App/index.tsx', () => {
    const App = require('./App').default;

    render(<AppContainer><App /></AppContainer>, root);
  });
}
