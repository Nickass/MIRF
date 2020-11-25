import * as React from 'react';
import { Request, Response } from 'express';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { Provider as EnvFacadeProvider } from '~/system/env-facade/FacadeContext';
import createEnvFacade from '~/system/env-facade/createServerFacade'

export type ServerWrapperProps = {
  store: any;
  req: Request;
  res: Response;
  routerContext: StaticRouterContext;
  children: any;
}

export const ServerWrapper: React.SFC<ServerWrapperProps> = function ({ children, store, req, res, routerContext }) {
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