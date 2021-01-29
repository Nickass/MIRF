import * as React from 'react';
import { Request, Response } from 'express';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter, StaticRouterContext } from 'react-router';
import EnvComponentContext, { ReactComponent } from './components';

const GetServerModules = require.context('~/components/', true, /.*\/server/);

export type ServerWrapperProps = {
  store: any;
  req: Request;
  res: Response;
  routerContext: StaticRouterContext;
  children: any;
}

export const ServerWrapper: ReactComponent<ServerWrapperProps> = props => {
  const { children, store, req, res, routerContext } = props;
  const context = { store, req, res, routerContext };

  const serverComponents = React.useMemo(() => GetServerModules
    .keys()
    .reduce((acc, key) => {
      const name = key.replace(/\.\/(.*)\/server.*/, '$1');
      const { default: getComponent } = GetServerModules(key);

      return { ...acc, [name]: getComponent(context) };
    }, {})
  , [context]);

  return (
    <EnvComponentContext.Provider value={serverComponents}>
      <ReduxProvider store={store}>
        <StaticRouter location={req.url} context={routerContext}>
          {children}
        </StaticRouter>
      </ReduxProvider>
    </EnvComponentContext.Provider>
  );
};

export default ServerWrapper;
