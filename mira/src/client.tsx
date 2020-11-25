// modules
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as RouterProvider } from 'connected-react-router';

// system
import configureStore, { history, isServer } from '~/system/store';
import { Provider as EnvFacadeProvider } from '~/system/env-facade/FacadeContext';
import createEnvFacade from '~/system/env-facade/createClientFacade';
import { Provider as RouterContextProvider } from '~/system/components/Router/RouterContext';
import ExternalRouter from '~/system/components/Router';
import ExternalComponent from '~/system/components/ExternalComponent';
import ExternalModule from '~/system/components/PageModule';
import AsyncComponent from '~/system/components/AsyncComponent';

// assets
import 'normalize.css/normalize.css';

function main(Root = ExternalComponent, hydrender = render) {
  const store = configureStore(window.REDUX_STATE);
  const facade = createEnvFacade({store});
  const root = document.getElementById('app-root');
  const providedModules = { AsyncComponent, ExternalModule, ExternalComponent, ExternalRouter };

  hydrender(
    <EnvFacadeProvider value={facade}>
      <ReduxProvider store={store}>
        <RouterProvider history={history}>
          <RouterContextProvider value={{ full_id: 'base', full_dir: '', full_path: '', middlewares: {} }}>
            <Root url={process.env.COMPONENT_SERVER + '/index.js'} provide={providedModules} />
          </RouterContextProvider>
        </RouterProvider>
      </ReduxProvider>
    </EnvFacadeProvider>
    , root
  );
}

main(ExternalComponent, hydrate);