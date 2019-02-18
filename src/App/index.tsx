// modules
import * as React from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

// system
import book from 'system/book';

// custom
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Settings from 'pages/Settings';
import Words from 'pages/Words';
import ErrorBoundary from 'widgets/ErrorBoundary';

// assets
import {
  Container,
  Header,
  center,
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
        <Header />
        <ErrorBoundary>
          <Switch>
            <Route path={book.home.root()} component={center(Home)} exact={true} />
            <Route path={book.words.root('')} component={center(Words)} />
            <Route path={book.settings.root()} component={center(Settings)} />
            <Route component={NotFound} />
          </Switch>
        </ErrorBoundary>
        <Footer />
      </Container>
    )
  }
}

export default App;