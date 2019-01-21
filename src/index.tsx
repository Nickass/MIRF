// modules
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import getStore, { history } from 'store';

// assets
import 'normalize.css/normalize';
import 'assets/base';

// custom
import App from 'App';

//assets
import 'assets/atomic';

const root = document.getElementById('app-root');
const store = getStore();


function main(Root = App) {
  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={Root} />
          </Switch>
        </ConnectedRouter>
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