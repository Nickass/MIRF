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
  const defaultMiddlewares = {};

  const MiddlewareComponent = React.useCallback(({ pageModule }) => {
    const { middlewares = defaultMiddlewares } = pageModule;
    const allMWares: MWContextValue = React.useMemo(
      () => ({ ...parentMiddlewares, ...middlewares })
      , [parentMiddlewares, middlewares]
    );
    const callAllMwares = config.middlewares.reduce((parentMW, name) => {
      const mware = allMWares[name] || asyncIdentity;
      return value => parentMW(value).then(mware);
    }, asyncIdentity);

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
  }, []);

  return <EnvPageModule path={config.dir.replace(/\.\//, '')} Component={MiddlewareComponent} />;
};

export default Middleware;