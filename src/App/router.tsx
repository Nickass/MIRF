// modules
import * as React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router';
import loadable, { LoadableComponent, lazy } from '@loadable/component'

// system
import { Consumer as EnvFacadeConsumer } from '~/utils/env-middleware/FacadeContext';
import { routes, route } from '../pages/routes';

// custom
import AsyncComponent from '~/widgets/AsyncComponent';


const fallback = <div>Load chunk</div>;
const components: {[propName: string]: LoadableComponent<any> } = {
  Home: loadable(() => import('../pages/Home'), { fallback }),
  Settings: loadable(() => import('../pages/Settings'), { fallback }),
  Words: loadable(() => import('../pages/Words'), { fallback }),
  NotFound: loadable(() => import('../pages/NotFound'), { fallback }),
}

type middlewares = {
  [propName: string]: (props: object) => Promise<any>
}
type PagesProps = {
  className?: string;
};
type State = {

};

// const getAllRedirectedPaths = (routes: routes): JSX.Element[] => {
//   return routes.reduce((acc, curr) => {
//     const inner = curr.children ? getAllRedirectedPaths(curr.children) : [];
//     const redirected = curr.redirected ? Array.isArray(curr.redirected) ? curr.redirected : [curr.redirected] : [];
//     const routes = redirected.map(from => (
//       <Route exact path={from}>
//         <Redirect to={curr.path} />
//       </Route>
//     ));

//     return [ ...acc, ...routes, ...inner ];
//   }, [] as JSX.Element[]);
// }

const allRoutes = require.context('../pages/', true, /routes/);
const allPages = require.context('../pages/', true, /index/);
const allMiddlewares = require.context('../pages/', true, /middlewares/)
const getAllRoutes = (fsPath: string, rootProps = {}) => {
  const routesPath = `${fsPath}/routes`;
  let routes: routes = [];
  try { routes = allRoutes(routesPath).default; } catch (err) {}

  return routes.map(config => {
    const subPath = `${fsPath}/${config.component}`;

    const componentPath = `${subPath}/index`;
    let Page: React.SFC | null = null;
    try { Page = allPages(componentPath).default; } catch (err) { }

    const middlewarePath = `${fsPath}/middlewares`;
    let middlewares: middlewares = {};
    try { middlewares = allMiddlewares(middlewarePath); } catch (err) { }

    const middleware = config.middleware ? middlewares[config.middleware] : undefined;

    return (
      <Route exact key={config.id} path={config.path} render={props => {
        const allProps = {...rootProps, ...config.props, ...props};
        const innerRoutes = !!config.component && getAllRoutes(subPath, config.props);
        const page = Page ? (
          <Page {...allProps}>
            {innerRoutes}
          </Page>
        ) : innerRoutes;

        if (middleware) {
          return (
            <EnvFacadeConsumer>
              {envMiddlewareFacade => (
                <AsyncComponent wait={envMiddlewareFacade(middleware)} resolve={() => page} />
              )}
            </EnvFacadeConsumer>
          );
        } else {
          return page;
        }
      }} />
    );
  });
}
class Pages extends React.Component<PagesProps, State> {
  render () {
    return (
      <Switch>
        {/* {getAllRedirectedPaths(routes)} */}
        {getAllRoutes('.', this.props)}
        <Route render={(props) => <components.NotFound {...this.props} {...props} />} />
      </Switch>
    )
  }
}

export default Pages;