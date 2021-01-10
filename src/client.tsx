// modules
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as RouterProvider } from 'connected-react-router';

// system
import configureStore, { history } from './store';
import { Provider as RouterContextProvider } from './components/Router/RouterContext';
import ExternalComponent from './components/ExternalComponent';
import EnvComponentContext, * as components from './components';

// assets
import 'normalize.css/normalize.css';

const GetClientModules = require.context('~/components/', true, /.*\/client.tsx/);

function main(Root = ExternalComponent, hydrender = render) {
  const store = configureStore(window.REDUX_STATE);
  const root = document.getElementById('app-root');
  const context = { store };

  const clientComponents = GetClientModules.keys().reduce((acc, key) => {
    const name = key.replace(/\.\/(.*)\/client.*/, '$1');
    const { default: getComponent } = GetClientModules(key);

    return { ...acc, [name]: getComponent(context) };
  }, {});

  hydrender(
    <EnvComponentContext.Provider value={clientComponents}>
      <ReduxProvider store={store}>
        <RouterProvider history={history}>
          <RouterContextProvider value={{ full_id: 'base', full_dir: '', full_path: '', middlewares: {} }}>
            <Root url={window.ROOT_COMPONENT} provide={components} />
          </RouterContextProvider>
        </RouterProvider>
      </ReduxProvider>
    </EnvComponentContext.Provider>
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
