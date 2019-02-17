// modules
import * as React from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

// system
import book from 'system/book';

// custom
import Header from './Header';
import Footer from './Footer';
import Words from './pages/Words';
import Settings from './pages/Settings';

// assets
import './assets/styles.scss';

interface AppProps {
};

class App extends React.Component<AppProps> {
  render () {
    return (
      <div className="App">
        <Header className="App__header" />
        <Switch>
            {/* <Route path={book.home.root()} component={Root} /> */}
            <Route path={book.words.root('')} component={Words} />
            <Route path={book.settings.root()} component={Settings} />
          </Switch>
        {/* <Words className="App__center" /> */}
        <Footer className="App__footer" />
      </div>
    )
  }
}

export default App;