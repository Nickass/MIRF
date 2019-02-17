import { combineReducers, createStore, applyMiddleware, compose, Reducer, Store } from 'redux';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import appState from 'App/state';
import appReducer from 'App/reducer';
import settingsState from 'pages/Settings/state';
import settingsReducer from 'pages/Settings/reducer';
import wordsState from 'pages/Words/state';
import wordsReducer from 'pages/Words/reducer';


export type action = { type: string; payload?: any; };
export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
export const defaultState = {
  router: {},
  app: appState,
  settings: settingsState,
  words: wordsState
};

export default function(initialState = defaultState, url = '/'): [Store, History] {
  const composeEnhancers = !isServer && process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const history = !isServer ? createBrowserHistory() : createMemoryHistory({
    initialEntries: [url]
  });
  const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history)));
  const rootReducer = combineReducers<typeof initialState>({
    router: connectRouter(history) as any,
    app: appReducer,
    settings: settingsReducer,
    words: wordsReducer
  });
  const store = createStore<typeof initialState, action, any, any>(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('App/reducer', () => {
      store.replaceReducer(appReducer)
    });

    module.hot.accept('pages/Settings/reducer', () => {
      store.replaceReducer(settingsReducer)
    });

    module.hot.accept('pages/Words/reducer', () => {
      store.replaceReducer(wordsReducer)
    });
  }

  return [store, history];
}
