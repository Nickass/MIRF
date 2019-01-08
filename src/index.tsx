// modules
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import getStore from 'store';

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
        <Root />
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