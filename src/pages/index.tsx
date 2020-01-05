// modules
import * as React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router';
import loadable, { LoadableComponent } from '@loadable/component'

// system
import { routes } from '~/utils/routes';

// custo

const fallback = <div>Load chunk</div>;
const components: {[propName: string]: LoadableComponent<any> } = {
  Home: loadable(() => import('./Home'), { fallback }),
  Settings: loadable(() => import('./Settings'), { fallback }),
  Words: loadable(() => import('./Words'), { fallback }),
  NotFound: loadable(() => import('./NotFound'), { fallback }),
}

type PagesProps = {
  className?: string;
};
type State = {

};

const getAllRoutes = (routes: routes, path = '/', rootProps = {}) => routes.map(config => {
  const Page = components[config.component];
  const fullPath = `/${path}/${config.path}`.replace(/\/*/, '/');

  return (
    <Route exact strict key={config.id} path={fullPath} render={props => (
      <Page {...rootProps} {...config.props} {...props}>
        {!!config.children && getAllRoutes(config.children, fullPath, config.props) }
      </Page>
    )} />
  )
});

class Pages extends React.Component<PagesProps, State> {
  render () {
    return (
      <Switch>
        {getAllRoutes(routes, "/", this.props)}
        <Route render={(props) => <components.NotFound {...this.props} {...props} />} />
      </Switch>
    )
  }
}

export default Pages;