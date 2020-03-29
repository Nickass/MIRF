// modules
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { loadableReady } from '@loadable/component'

// system
import configureStore, { history, isServer } from '~/store';
import { Provider as EnvFacadeProvider, createContext as createEnvContext } from '~/utils/env-middleware/FacadeContext';
import createEnvMiddlewareFacade from '~/utils/env-middleware/createClientFacade';

// assets
import 'normalize.css/normalize.css';
import '~/assets/base.scss';

// custom
import App from '~/App';

// assets
import '~/assets/atomic.scss';

function main(Root = App, rende = render) {
  const store = configureStore(window.REDUX_STATE);
  const context = createEnvContext(store);
  const middlewareFacade = createEnvMiddlewareFacade(context);
  const root = document.getElementById('app-root');

  rende(
    <EnvFacadeProvider value={middlewareFacade}>
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
    module.hot.accept('~/App', () => {
      main(require('~/App').default, hydrate)
    });
  }
  loadableReady(() => main(App, hydrate));
}

export { App, configureStore };