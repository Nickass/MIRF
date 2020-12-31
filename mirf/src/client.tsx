// modules
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as RouterProvider } from 'connected-react-router';

// system
import configureStore, { history } from '~/system/store';
import { Provider as RouterContextProvider } from '~/system/components/Router/RouterContext';
import { Provider as EnvFacadeProvider } from '~/system/env-facade';
import createEnvFacade from '~/system/env-facade/client';
import ExternalComponent from '~/system/components/ExternalComponent';
import * as providedModules from './system/provided';

// assets
import 'normalize.css/normalize.css';

function main(Root = ExternalComponent, hydrender = render) {
  const store = configureStore(window.REDUX_STATE);
  const facade = createEnvFacade({ store });
  const root = document.getElementById('app-root');

  hydrender(
    <EnvFacadeProvider value={facade}>
      <ReduxProvider store={store}>
        <RouterProvider history={history}>
          <RouterContextProvider value={{ full_id: 'base', full_dir: '', full_path: '', middlewares: {} }}>
            <Root url={window.ROOT_COMPONENT} provide={providedModules} />
          </RouterContextProvider>
        </RouterProvider>
      </ReduxProvider>
    </EnvFacadeProvider>
    , root
  );
}

main(ExternalComponent, hydrate);

// if (module.hot) {
//   module.hot.accept(function() {
//     console.log('accept')
//     main(ExternalComponent, render); // TODO: make it work
//   });
// }
