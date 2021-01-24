// modules
import * as React from 'react';
import { Switch, Route } from 'react-router';
import Helmet from 'react-helmet';

// system
import ExternalComponent from '~/components/ExternalComponent'
import ExternalModule from '~/components/ExternalModule'
import AsyncComponent from '~/components/AsyncComponent'
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
  middleware?: any;
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

export const Router: ReactComponent<RouterProps> = ({ routes = [], base, ...rootProps }: RouterProps) => {
  const baseRoute = React.useContext(CustomRouterContext);

  return (
    <Switch>
      {routes.map(route => {
        const fullId = baseRoute.full_id + '_' + route.id;
        const fullPath = baseRoute.full_path + route.path;
        const fullDir = baseRoute.full_dir + route.dir;

        return (
          <Route key={fullId} path={fullPath} exact={route.exact} render={props => {
            const allProps = { ...rootProps, ...route.props, ...props };

            const ModuleComponent = (props: any) => {
              const { default: Page, config = {} } = props;
              const title = config.name || route.id;
              const newBaseRoute = React.useMemo(() => ({
                full_id: fullId,
                full_path: fullPath,
                full_dir: fullDir,
              }), [fullId, fullPath, fullDir]);

              const PageComponent = React.useCallback(props => (
                <CustomRouterContext.Provider value={newBaseRoute}>
                  <Helmet>
                    <title>{title}</title>
                  </Helmet>
                  <Page {...props} />
                </CustomRouterContext.Provider>
              ), [title, newBaseRoute]);

              return (
                <AsyncComponent id={'apply-middleware-' + route.id} SuccessComponent={PageComponent}>
                  {() => (route.middleware ? route.middleware(allProps) : {})}
                </AsyncComponent>
              );
            };

            return (
              <ExternalModule
                Component={ModuleComponent}
                path={base + route.module}
                timeout={allProps.timeout}
              />
            );
          }} />
        );
      })}
    </Switch>
  )
}

export default Router;
