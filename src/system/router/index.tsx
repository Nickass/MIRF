// modules
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';

// system
import { Consumer as EnvFacadeConsumer } from '~/system/env-facade/FacadeContext';
import getPagesConfig, { routes } from './getPagesConfig';

// custom
import NotFound from '~/pages/NotFound';

type PagesProps = {
  className?: string;
};

const getAllRedirectedPaths = (routes: routes) => {
  return routes.reduce((acc, curr) => {
    const inner: JSX.Element[] = curr?.config?.routes ? getAllRedirectedPaths(curr.config.routes) : [];
    const redirected = curr.redirected ? Array.isArray(curr.redirected) ? curr.redirected : [curr.redirected] : [];
    const routes = redirected.map(from => (
      <Route exact path={from}>
        <Redirect to={curr.path} />
      </Route>
    ));

    return [ ...acc, ...routes, ...inner ];
  }, [] as JSX.Element[]);
}

const getAllRoutes = (routes: routes, rootProps = {}) => {
  return routes.map(route => {
    const { chunkName } = route;

    return (
      <Route exact key={route.id} path={route.path} render={props => {
        const children = route?.config?.routes ? getAllRoutes(route.config.routes, route.props) : [];
        const allProps = { ...rootProps, ...route.props, ...props, children };

        return (
          <EnvFacadeConsumer>
            {ctx => {
              const Page = ctx.pageLoader(chunkName);
              return <Page {...allProps} />
            }}
          </EnvFacadeConsumer>
        );
      }} />
    );
  });
}

class Pages extends React.Component<PagesProps> {
  render () {
    const config = getPagesConfig('./');

    return (
      <Switch>
        {config?.routes && getAllRedirectedPaths(config.routes)}
        {config?.routes && getAllRoutes(config.routes, this.props)}
        <Route render={(props) => <NotFound {...this.props} {...props} />} />
      </Switch>
    )
  }
}

export default Pages;