// modules
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Helmet from 'react-helmet';

// system
import PageLoader from '~/system/components/PageLoader';
import Middleware from '~/system/components/Middleware';
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
  const { id, name, path, dir, routes } = config;
  const innerRoutes = routes.map(route => getAllRoutes(route, rootProps));

  const PageRoute = (props: any) => {
    const allProps = { ...rootProps, ...config.props, ...props };

    return (
      <Middleware config={config} props={allProps}>
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <PageLoader path={dir.replace(/\.\//, '')} props={allProps} />
      </Middleware>
    );
  };

  const REWRITE_IT = () => ( // TODO: REWRITE IT
    <PageRoute>
      <Switch>{innerRoutes}</Switch>
    </PageRoute>
  )


  return <Route key={id} path={path} exact={!innerRoutes.length} component={REWRITE_IT} />;
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