// modules
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Helmet from 'react-helmet';

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

const getAllRoutes = (config: config, rootProps = {}, Parent: any = React.Fragment): JSX.Element[] => {
  const { id, name, path, dir, routes } = config;
  const PageRouteComponent = (props: any) => {
    const allProps = { ...rootProps, ...config.props, ...props };

    return (
      <Parent>
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <Page path={dir.replace(/\.\//, '')} props={allProps}/>
      </Parent>
    );
  }
  const innerRoutes = routes.reduce((acc, curr) => 
    [...acc, ...getAllRoutes(curr, rootProps, PageRouteComponent)], [] as JSX.Element[]);


  return [...innerRoutes, <Route key={id} exact={true} path={path} component={PageRouteComponent} />]
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