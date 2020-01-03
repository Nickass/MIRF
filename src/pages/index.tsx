// modules
import * as React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router';
import loadable from '@loadable/component'

// system
import book from '~/utils/book';

// custo

const fallback = <div>Load chunk</div>;
const Home = loadable(() => import('./Home'), { fallback });
const Settings = loadable(() => import('./Settings'), { fallback });
const Words = loadable(() => import('./Words'), { fallback });
const NotFound = loadable(() => import('./NotFound'), { fallback });

type PagesProps = {
  className?: string;
};
type State = {

};

class Pages extends React.Component<PagesProps, State> {
  render () {
    return (
      <Switch>
        <Redirect from={book.words.root('')} to={book.words.root(1)} exact/>
        <Route path={book.home.root()} exact={true} render={(props) => <Home {...this.props} {...props} />} />
        <Route path={book.words.root()} render={(props) => <Words {...this.props} {...props} />} />
        <Route path={book.settings.root()} render={(props) => <Settings {...this.props} {...props} />} />
        <Route render={(props) => <NotFound {...this.props} {...props} />} />
      </Switch>
    )
  }
}

export default Pages;