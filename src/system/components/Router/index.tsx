// modules
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';

// system
import Page from '~/system/components/Page';
import getPagesConfig, { config } from './getPagesConfig';

type PagesProps = {
  className?: string;
  id?: string;
  path?: string;
  dir?: string;
  props?: { [propName: string]: any };
};

const getAllRedirectedPaths = (config: config): JSX.Element[] => {
  const inner = config.routes.reduce((acc, curr) => ([ ...acc, ...getAllRedirectedPaths(curr) ]), [] as JSX.Element[]);
  
  const routes = config.redirected.map(from => (
    <Route key={from} exact path={from}>
      {console.log("from", from, config.path)}
      <Redirect to={config.path} />
    </Route>
  ));
  return [ ...routes, ...inner ];
}

const getAllRoutes = (config: config, rootProps = {}): JSX.Element => {
  const { id, path, routes } = config;
  const innerRoutes = routes.map(route => getAllRoutes(route, rootProps));

  const PageRoute = (props: any) => {
    const allProps = { ...rootProps, ...config.props, ...props };

    return (
      <Page config={config} props={allProps}>
         <Switch>{innerRoutes}</Switch>
      </Page>
    );
  };

  return <Route key={id} path={path} exact={!innerRoutes.length} component={PageRoute} />;
}


export const Pages: React.SFC<PagesProps> = ({ id = 'baseRoute', path = '/', dir = './', props = {} }) => {
  const config = getPagesConfig({ id, path, dir });

  return (
    <Switch>
      {getAllRedirectedPaths(config)}
      {getAllRoutes(config, { ...props, config })}
    </Switch>
  )
}

export default Pages;