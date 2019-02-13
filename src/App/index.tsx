// modules
import * as React from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// custom
import Header from './Header';
import Footer from './Footer';
import Translator from './pages/Translator';
import { fetchInfo } from './saga';
import { selectInfo } from './selectors';
import Info from 'utils/info';

// assets
import './assets/styles.scss';

interface AppProps {
  info: {
    countWords: number;
  };
  dispatch: any;
};

class App extends React.Component<AppProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    
    fetchInfo(dispatch);
  }

  render () {
    const { info } = this.props;

    return (
      <Info.Provider value={info}>
        <div className="App">
          <Header className="App__header" />
          <Switch>
            <Route path="/translator" component={Translator} />
          </Switch>
          {/* <Translator className="App__center" /> */}
          <Footer className="App__footer" />
        </div>
      </Info.Provider>
    )
  }
}

export default connect(createStructuredSelector({
  info: selectInfo,
}))(App);