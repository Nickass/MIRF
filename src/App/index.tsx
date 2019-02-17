// modules
import * as React from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

// system
import book from 'system/book';

// custom
import Settings from 'pages/Settings';
import Words from 'pages/Words';
import Header from './Header';
import Footer from './Footer';

// assets
import './assets/styles.scss';

interface AppProps {
};

class App extends React.Component<AppProps> {
  render () {
    return (
      <div className="App">
        <Header className="App__header" />
        <div className="App__center">
          <Switch>
            {/* <Route path={book.home.root()} component={Root} /> */}
            <Route path={book.words.root('')} component={Words} />
            <Route path={book.settings.root()} component={Settings} />
          </Switch>
        </div>
        <Footer className="App__footer" />
      </div>
    )
  }
}

export default App;