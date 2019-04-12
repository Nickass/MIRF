// modules
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import loadable from '@loadable/component'
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

// system
import book from 'system/book';

// custom
const Home = loadable(() => import('pages/Home'));
const Settings = loadable(() => import('pages/Settings'));
const Words = loadable(() => import('pages/Words'));
const NotFound = loadable(() => import('pages/NotFound'));
import ErrorBoundary from 'widgets/ErrorBoundary';

// assets
import {
  Container,
  centerStyle,
  Header,
  Footer
} from './assets/styles';

type AppProps = {
  
};
type State = {

};

class App extends React.Component<AppProps, State> {
  render () {
    return (
      <Container>
        <Helmet titleTemplate="English cards | %s">
          <html lang="en" />
          <title>Hello!</title>
        </Helmet>
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