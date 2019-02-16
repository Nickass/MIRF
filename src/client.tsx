// modules
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import configureStore from 'store';

// assets
import 'normalize.css/normalize.css';
import 'assets/base';

// custom
import App from 'App';

// assets
import 'assets/atomic';


function main(Root = App) {
  if(typeof document === 'undefined') {
    return;
  }
  const store = configureStore();
  const root = document.getElementById('app-root');

  render(
    <AppContainer>
      <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
          <Switch>
            <Route path="/" component={Root} />
          </Switch>
        {/* </ConnectedRouter> */}
      </Provider>
    </AppContainer>,
    root
  );
} 

if (module.hot) {
  module.hot.accept('App', () => {
    main(require('App').default)
  });
}

main(App);

export default {App, configureStore};