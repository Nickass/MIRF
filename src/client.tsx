// modules
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { loadableReady } from '@loadable/component'

// system
import configureStore, { history, isServer } from '~/store';

// assets
import 'normalize.css/normalize.css';
import '~/assets/base.scss';

// custom
import App from '~/App';

// assets
import '~/assets/atomic.scss';

function main(Root = App) {
  const store = configureStore(window.REDUX_STATE);
  
  const root = document.getElementById('app-root');
  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Root />
        </ConnectedRouter>
      </Provider>
    </AppContainer>
    , root
  );
}

if (!isServer) {
  if (module.hot) {
    module.hot.accept('~/App', () => {
      main(require('~/App').default)
    });
  }
  loadableReady(() => main(App));
}

export { App, configureStore };