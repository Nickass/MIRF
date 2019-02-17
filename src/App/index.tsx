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
import Header from './Header';
import Footer from './Footer';

// assets
import './assets/styles.scss';

type AppProps = {
};
type State = {

};

class App extends React.Component<AppProps, State> {
  render () {
    return (
      <div className="App">
        <Header className="App__header" />
        <div className="App__center">
          <ErrorBoundary>
            <Switch>
              <Route path={book.home.root()} component={Home} exact={true} />
              <Route path={book.words.root('')} component={Words} />
              <Route path={book.settings.root()} component={Settings} />
              <Route component={NotFound} />
            </Switch>
          </ErrorBoundary>
        </div>
        <Footer className="App__footer" />
      </div>
    )
  }
}

export default App;