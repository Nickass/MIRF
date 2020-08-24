// modules
import * as React from 'react';
import { Switch, Route } from 'react-router';
import Helmet from 'react-helmet';

// system
import ENVContext from '~/system/env-facade/FacadeContext';
import AsyncComponent from '~/system/components/AsyncComponent';
import CustomRouterContext from './RouterContext';

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
}

type RouterProps = {
  routes: subConfig[];
  [propName: string]: any
};

export const Router: React.SFC<RouterProps> = ({ routes = [], ...rootProps }: RouterProps) => {
  const { EnvPageModule } = React.useContext(ENVContext);
  const baseRoute = React.useContext(CustomRouterContext);
  const parentMiddlewares = baseRoute.middlewares;

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

            const ModuleComponent = ({ pageModule }: any) => {
              const { default: Page, config = {}, middlewares = {}, init = asyncIdentity } = pageModule;
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
                  {async () => await callAllMwares(allProps)}
                </AsyncComponent>
              );
            };

            return <EnvPageModule path={fullDir.replace(/\.\//, '')} Component={ModuleComponent} />;
          }} />
        );
      })}
    </Switch>
  )
}

export default Router;