// modules
import * as React from 'react';
import { Switch, Route } from 'react-router';
import Helmet from 'react-helmet';

// system
import ExternalComponent from '~/system/components/ExternalComponent'
import ExternalModule from '~/system/components/ExternalModule'
import AsyncComponent from '~/system/components/AsyncComponent'
import CustomRouterContext from './RouterContext';

type asyncIdentity<T = any> = (a: T) => Promise<T>;
const asyncIdentity: asyncIdentity = async a => a;

export interface baseConfig {
  name?: string;
  params?: string;
  redirected?: string[];
  routes?: subConfig[];
}

export interface subConfig {
  id: string;
  path: string;
  dir: string;
  middlewares?: string[];
  exact?: boolean;
  props?: { [propName: string]: any };
  module: string;
  timeout?: number;
}

type RouterProps = {
  routes: subConfig[];
  timeout?: number;
  [propName: string]: any
};

export const Router: React.SFC<RouterProps> = ({ routes = [], ...rootProps }: RouterProps) => {
  const baseRoute = React.useContext(CustomRouterContext);
  const parentMiddlewares = baseRoute.middlewares;
  const providedModules = { ExternalComponent, ExternalModule, AsyncComponent, Router };

  return (
    <Switch>
      {routes.map(route => {
        const fullId = baseRoute.full_id + '_' + route.id;
        const fullPath = baseRoute.full_path + route.path;
        const fullDir = baseRoute.full_dir + route.dir;

        return (
          <Route key={fullId} path={fullPath} exact={route.exact} render={props => {
            const middlewaresToInvoke = [...(route.middlewares || []), 'init'];
            const allProps = { ...rootProps, ...route.props, ...props };

            const ModuleComponent = (props: any) => {
              const { default: Page, config = {}, middlewares = {}, init = asyncIdentity } = props;
              const allMWares = React.useMemo(
                () => ({ ...parentMiddlewares, ...middlewares, init })
                , [parentMiddlewares, middlewares, init]);
              const callAllMwares = React.useMemo(() => middlewaresToInvoke.reduce((parentMW, name) => {
                const mware = allMWares[name] || asyncIdentity;
                return value => parentMW(value).then(mware);
              }, asyncIdentity), [middlewaresToInvoke, allMWares]);
              const title = config.name || route.id;
              const newBaseRoute = React.useMemo(() => ({
                full_id: fullId,
                full_path: fullPath,
                full_dir: fullDir,
                middlewares: allMWares
              }), [fullId, fullPath, fullDir, allMWares]);

              const PageComponent = React.useCallback(props => {
                return (
                  <CustomRouterContext.Provider value={newBaseRoute}>
                    <Helmet>
                      <title>{title}</title>
                    </Helmet>
                    <Page {...props} />
                  </CustomRouterContext.Provider>
                );
              }, [title, newBaseRoute]);

              return (
                <AsyncComponent id={'apply-middleware-' + route.id} SuccessComponent={PageComponent}>
                  {() => callAllMwares(allProps)}
                </AsyncComponent>
              );
            };

            return <ExternalModule path={route.module} Component={ModuleComponent} provide={providedModules} timeout={allProps.timeout} />;
          }} />
        );
      })}
    </Switch>
  )
}

export default Router;