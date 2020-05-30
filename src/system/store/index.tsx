import { combineReducers, createStore, applyMiddleware, compose, Reducer, Store } from 'redux';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';

import appState from '~/App/state';
import appReducer from '~/App/reducer';
import settingsState from '~/pages/Settings/state';
import settingsReducer from '~/pages/Settings/reducer';
import wordsState from '~/pages/Words/state';
import wordsReducer from '~/pages/Words/reducer';
import { reducer as asyncComponentReducer, state as asyncComponentState } from '~/system/AsyncComponent/store';

export type action = { type: string; payload?: any; };
export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
export interface defaultState {
  router: RouterState; // Do not use router in initial state
  asyncComponent: asyncComponentState,
  app: appState;
  settings: settingsState;
  words: wordsState;
}
export const defaultState = {
  asyncComponent: asyncComponentState,
  app: appState,
  settings: settingsState,
  words: wordsState
};
export const history = isServer ? createMemoryHistory() : createBrowserHistory();

export default function(initialState = defaultState): Store {
  const composeEnhancers = !isServer && process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const routerReducer = connectRouter(history);
  const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history)));

  const rootReducer = combineReducers<defaultState>({
    router: routerReducer,
    asyncComponent: asyncComponentReducer,
    app: appReducer,
    settings: settingsReducer,
    words: wordsReducer
  });
  const store = createStore<defaultState, action, any, any>(rootReducer, initialState as defaultState, enhancer);

  if (module.hot) {
    module.hot.accept('~/App/reducer', () => {
      store.replaceReducer(appReducer)
    });

    module.hot.accept('~/pages/Settings/reducer', () => {
      store.replaceReducer(settingsReducer)
    });

    module.hot.accept('~/pages/Words/reducer', () => {
      store.replaceReducer(wordsReducer)
    });
  }

  return store;
}
