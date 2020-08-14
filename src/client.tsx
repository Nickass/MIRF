// modules
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as RouterProvider } from 'connected-react-router';

// system
import configureStore, { history, isServer } from '~/system/store';
import { Provider as EnvFacadeProvider } from '~/system/env-facade/FacadeContext';
import { Provider as CustomRouterProvider } from '~/system/components/Router/RouterContext';
import createEnvFacade from '~/system/env-facade/createClientFacade';
import App from '~/App';

// assets
import 'normalize.css/normalize.css';

function main(Root = App, hydrender = render) {
  const store = configureStore(window.REDUX_STATE);
  const facade = createEnvFacade({store});
  const root = document.getElementById('app-root');
  const curtomRouterValue = { full_id: 'base', full_dir: '', full_path: '', middlewares: {} };

  hydrender(
    <EnvFacadeProvider value={facade}>
      <ReduxProvider store={store}>
        <RouterProvider history={history}>
          <CustomRouterProvider value={curtomRouterValue}>
            <Root />
          </CustomRouterProvider>
        </RouterProvider>
      </ReduxProvider>
    </EnvFacadeProvider>
    , root
  );
}

if (module.hot) {
  module.hot.accept('~/App', () => {
    main(require('~/App').default, render)
  });
}

main(App, hydrate);