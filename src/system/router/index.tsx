// modules
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Helmet from 'react-helmet';

// system
import { Consumer as EnvFacadeConsumer } from '~/system/env-facade/FacadeContext';
import getPagesConfig, { config } from './getPagesConfig';

type PagesProps = {
  className?: string;
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
        <EnvFacadeConsumer>
          {ctx => {
            const Page = ctx.pageLoader(dir.replace(/\.\//, ''));
            return <Page {...allProps} />
          }}
        </EnvFacadeConsumer>
      </Parent>
    );
  }
  const innerRoutes = routes.reduce((acc, curr) => 
    [...acc, ...getAllRoutes(curr, rootProps, PageRouteComponent)], [] as JSX.Element[]);


  return [...innerRoutes, <Route key={id} exact={true} path={path} component={PageRouteComponent} />]
}

class Pages extends React.Component<PagesProps> {
  render () {
    const config = getPagesConfig({ id: 'baseRoute', path: '/', dir: './' });

    return (
      <Switch>
        {getAllRedirectedPaths(config)}
        {getAllRoutes(config, { ...this.props, config })}
      </Switch>
    )
  }
}

export default Pages;