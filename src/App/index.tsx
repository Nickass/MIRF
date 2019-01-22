// modules
import * as React from 'react';

// custom
import Header from './Header';
import Footer from './Footer';
import Translator from './pages/Translator';

// assets
import './assets/styles.scss';
import { Switch, Route } from 'react-router';

interface AppProps {

};

class App extends React.Component<AppProps> {
  render () {
    return (
      <div className="App">
        <Header className="App__header" />
        <Switch>
          <Route path="/translator/:id" component={Translator} />
        </Switch>
        {/* <Translator className="App__center" /> */}
        <Footer className="App__footer" />
      </div>
    )
  }
}

export default App;