import * as React from 'react';
import { Request, Response } from 'express';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { Provider as EnvFacadeProvider } from '~/env-facade';
import createEnvFacade from '~/env-facade/server'

export type ServerWrapperProps = {
  store: any;
  req: Request;
  res: Response;
  routerContext: StaticRouterContext;
  children: any;
}

export const ServerWrapper: ReactComponent<ServerWrapperProps> = function ({ children, store, req, res, routerContext }) {
  const envFacade = createEnvFacade({ store, req, res, routerContext });

  return (
    <EnvFacadeProvider value={envFacade}>
      <ReduxProvider store={store}>
        <StaticRouter location={req.url} context={routerContext}>
          {children}
        </StaticRouter>
      </ReduxProvider>
    </EnvFacadeProvider>
  );
}

export default ServerWrapper;
