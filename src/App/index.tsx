// modules
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import loadable from '@loadable/component'
import { connect } from 'react-redux';
// system
import book from 'system/book';

// custom
// import Home from 'pages/Home';
// import NotFound from 'pages/NotFound';
// import Settings from 'pages/Settings';
// import Words from 'pages/Words';
import ErrorBoundary from 'widgets/ErrorBoundary';

const Home = loadable(() => import('pages/Home'));
const Settings = loadable(() => import('pages/Settings'));
const Words = loadable(() => import('pages/Words'));
const NotFound = loadable(() => import('pages/NotFound'));

// assets
import {
  Container,
  centerStyle,
  Header,
  Footer
} from './assets/styles';
import styled from 'styled-components';

type AppProps = {
  
};
type State = {

};

class App extends React.Component<AppProps, State> {
  render () {
    return (
      <Container>
        <Header />
        <ErrorBoundary>
          <Switch>
            <Redirect from={book.words.root('')} to={book.words.root(1)} exact/>
            <Route path={book.home.root()} component={Home} exact={true} />
            <Route path={book.words.root()} component={Words} />
            <Route path={book.settings.root()} component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </ErrorBoundary>
        <Footer />
      </Container>
    )
  }
}

export default App;