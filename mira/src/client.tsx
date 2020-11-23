// modules
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as RouterProvider } from 'connected-react-router';

// system
import configureStore, { history, isServer } from '~/system/store';
import { Provider as EnvFacadeProvider } from '~/system/env-facade/FacadeContext';
import createEnvFacade from '~/system/env-facade/createClientFacade';
import ExternalComponent from '~/system/components/ExternalComponent';

// assets
import 'normalize.css/normalize.css';

function main(Root = ExternalComponent, hydrender = render) {
  const store = configureStore(window.REDUX_STATE);
  const facade = createEnvFacade({store});
  const root = document.getElementById('app-root');
  const providedModules = { ExternalComponent };

  hydrender(
    <EnvFacadeProvider value={facade}>
      <ReduxProvider store={store}>
        <RouterProvider history={history}>
          <Root url={process.env.COMPONENT_SERVER + '/index.js'} provide={providedModules} />
        </RouterProvider>
      </ReduxProvider>
    </EnvFacadeProvider>
    , root
  );
}

main(ExternalComponent, hydrate);