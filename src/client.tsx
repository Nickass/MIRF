// modules
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { AppContainer as HotProvider } from 'react-hot-loader';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as RouterProvider } from 'connected-react-router';

// system
import Router from '~/system/components/Router';
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
      <HotProvider>
        <ReduxProvider store={store}>
          <RouterProvider history={history}>
            <Root />
          </RouterProvider>
        </ReduxProvider>
      </HotProvider>
    </EnvFacadeProvider>
    , root
  );
}

if (!isServer) {
  if (module.hot) {
    module.hot.accept('~/system/components/Router', () => {
      main(require('~/system/components/Router').default, hydrate)
    });
  }
  main(Router, hydrate)
}

export { Router, configureStore };