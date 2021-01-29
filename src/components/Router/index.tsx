// modules
import * as React from 'react';
import { Switch, Route } from 'react-router';
import Helmet from 'react-helmet';

// system
import { ReactComponent } from '..';
import ExternalComponent, { ExternalComponentProps } from '../ExternalComponent';
import AsyncComponent from '../AsyncComponent';
import CustomRouterContext from './RouterContext';

export interface RouterProps extends ExternalComponentProps {
  base: string;
  routes: subConfig[];
}

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
  src: string;
  timeout?: number;
}

export const Router: ReactComponent<RouterProps> = ({ routes = [], base, ...rootProps }: RouterProps) => {
  const baseRoute = React.useContext(CustomRouterContext);

  return (
    <Switch>
      {routes.map(route => {
        const fullId = `${baseRoute.full_id}_${route.id}`;
        const fullPath = `${baseRoute.full_path}${route.path}`;
        const fullDir = `${baseRoute.full_dir}${route.dir}`;

        return (
          <Route key={fullId} path={fullPath} exact={route.exact} render={props => {
            const config = { name: route.id }; // TODO: get config from manifest that should be created on the build stage.
            const externalProps = { ...rootProps, ...route };
            const allProps = { ...config, ...props, ...externalProps };

            const title = config.name || route.id;
            const newBaseRoute = {
              full_id: fullId,
              full_path: fullPath,
              full_dir: fullDir,
            };

            const PageComponent: ReactComponent<unknown> = props => (
              <CustomRouterContext.Provider value={newBaseRoute}>
                <Helmet>
                  <title>{title}</title>
                </Helmet>
                <ExternalComponent {...externalProps} href={base + route.src} innerProps={props} />
              </CustomRouterContext.Provider>
            );

            return (
              <AsyncComponent id={`apply-middleware-${route.id}`} SuccessComponent={PageComponent}>
                {() => (route.middleware ? route.middleware(allProps) : {})}
              </AsyncComponent>
            );
          }} />
        );
      })}
    </Switch>
  )
}

export default Router;
