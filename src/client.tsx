// modules
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as RouterProvider } from 'connected-react-router';

// system
import configureStore, { history, isServer } from '~/system/store';
import { Provider as EnvFacadeProvider } from '~/system/env-facade/FacadeContext';
import createEnvFacade from '~/system/env-facade/createClientFacade';

// assets
import 'normalize.css/normalize.css';
import '~/assets/base.scss';

// system
import Router from '~/system/components/Router';

// assets
import '~/assets/atomic.scss';

function main(Root = Router, hydrender = render) {
  const store = configureStore(window.REDUX_STATE);
  const facade = createEnvFacade({store});
  const root = document.getElementById('app-root');

  hydrender(
    <EnvFacadeProvider value={facade}>
      <ReduxProvider store={store}>
        <RouterProvider history={history}>
          <Root />
        </RouterProvider>
      </ReduxProvider>
    </EnvFacadeProvider>
    , root
  );
}

if (!isServer) {
  if (module.hot) {
    module.hot.accept('~/system/components/Router', () => {
      main(require('~/system/components/Router').default, render)
    });
  }
  main(Router, hydrate)
}

export { Router, configureStore };