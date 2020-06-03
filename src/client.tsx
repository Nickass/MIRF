// modules
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// system
import Router from '~/system/Router';
import configureStore, { history, isServer } from '~/system/store';
import { Provider as EnvFacadeProvider } from '~/system/env-facade/FacadeContext';
import createEnvFacade from '~/system/env-facade/createClientFacade';

// assets
import 'normalize.css/normalize.css';
import '~/assets/base.scss';

// assets
import '~/assets/atomic.scss';

function main(Root = Router, hydrender = render) {
  const store = configureStore(window.REDUX_STATE);
  const facade = createEnvFacade({store});
  const root = document.getElementById('app-root');

  hydrender(
    <EnvFacadeProvider value={facade}>
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Root />
          </ConnectedRouter>
        </Provider>
      </AppContainer>
    </EnvFacadeProvider>
    , root
  );
}

if (!isServer) {
  if (module.hot) {
    module.hot.accept('~/system/Router', () => {
      main(require('~/system/Router').default, hydrate)
    });
  }
  main(Router, hydrate)
}

export { Router, configureStore };