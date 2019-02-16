import { combineReducers, createStore, applyMiddleware, compose, Reducer, Store } from 'redux';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import appState from 'App/state';
import appReducer from 'App/reducer';
import settingsState from 'App/pages/Settings/state';
import settingsReducer from 'App/pages/Settings/reducer';
import translatorState from 'App/pages/Translator/state';
import translatorReducer from 'App/pages/Translator/reducer';


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
  translator: translatorState
};

export default function(initialState = defaultState, url = '/'): [Store, History] {
  const composeEnhancers = !isServer && process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const history = !isServer ? createBrowserHistory() : createMemoryHistory({
    initialEntries: ['/']
  });
  const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history)));
  const rootReducer = combineReducers<typeof initialState>({
    router: connectRouter(history) as any,
    app: appReducer,
    settings: settingsReducer,
    translator: translatorReducer
  });
  const store = createStore<typeof initialState, action, any, any>(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('App/reducer', () => {
      store.replaceReducer(appReducer)
    });

    module.hot.accept('App/pages/Settings/reducer', () => {
      store.replaceReducer(settingsReducer)
    });

    module.hot.accept('App/pages/Translator/reducer', () => {
      store.replaceReducer(translatorReducer)
    });
  }

  return [store, history];
}
