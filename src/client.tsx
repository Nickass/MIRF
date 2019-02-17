// modules
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import configureStore, { isServer } from 'store';

// assets
import 'normalize.css/normalize.css';
import 'assets/base';

// custom
import App from 'App';

// assets
import 'assets/atomic';


const [store, history] = configureStore();

function main(Root = App) {
  const root = document.getElementById('app-root');

  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Root />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    root
  );
}

if (!isServer) {
  if (module.hot) {
    module.hot.accept('App', () => {
      main(require('App').default)
    });
  }

  main(App);
}

export default { App, configureStore };