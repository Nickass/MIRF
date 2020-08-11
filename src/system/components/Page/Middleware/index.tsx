import * as React from 'react';
import ENVContext from '~/system/env-facade/FacadeContext'
import AsyncComponent from '~/system/components/AsyncComponent';
import { config } from '~/system/components/Router/getPagesConfig';
import {
  default as MWContext,
  Provider as MWProvider,
  MWContextValue
} from './MWContext';

type MiddlewareProps = {
  config: config;
  props: { [propName: string]: any };
  children: any;
}

const asyncIdentity: asyncIdentity = async a => a;

export const Middleware: React.SFC<MiddlewareProps> = ({ config, props, children }) => {
  const { EnvPageModule } = React.useContext(ENVContext);
  const parentMiddlewares = React.useContext(MWContext);
  const middlewaresToInvoke = React.useMemo(() => [ ...config.middlewares, 'init' ], [config.middlewares]);
  const defaultMiddlewares = {};

  const MiddlewareComponent = React.useCallback(({ pageModule }) => {
    const { middlewares = defaultMiddlewares, init = asyncIdentity } = pageModule;
    const allMWares: MWContextValue = React.useMemo(
      () => Object.freeze({ ...parentMiddlewares, ...middlewares, init })
    , [parentMiddlewares, middlewares, init]);
    const callAllMwares = React.useMemo(() => middlewaresToInvoke.reduce((parentMW, name) => {
      const mware = allMWares[name] || asyncIdentity;
      return value => parentMW(value).then(mware);
    }, asyncIdentity), [middlewaresToInvoke, allMWares]);
    const AfterMiddleware = React.useCallback(() => 
      <MWProvider value={allMWares}>{children}</MWProvider>
    , [children, allMWares]);

    return (
      <AsyncComponent
        id={'apply-middleware-' + config.id}
        SuccessComponent={AfterMiddleware}
        caching={false}
      >
        {async () => { await callAllMwares(props) }}
      </AsyncComponent>
    );
  }, [config, props, children]);

  return <EnvPageModule path={config.dir.replace(/\.\//, '')} Component={MiddlewareComponent} />;
};

export default Middleware;