import { combineReducers, createStore, applyMiddleware, compose, Reducer, Store } from 'redux';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';

import appState from '~/App/state';
import appReducer from '~/App/reducer';
import { reducer as asyncComponentReducer, state as asyncComponentState } from '~/system/AsyncComponent/store';
import { reducer as errorBoundaryReducer, state as errorBoundaryState } from '~/system/ErrorBoundary/store';

export type action = { type: string; payload?: any; };
export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
export interface defaultState {
  router: RouterState; // Do not use router in initial state
  asyncComponent: asyncComponentState,
  errorBoundary: errorBoundaryState,
  app: appState;
}
export const defaultState = {
  asyncComponent: asyncComponentState,
  errorBoundary: errorBoundaryState,
  app: appState,
};
export const history = isServer ? createMemoryHistory() : createBrowserHistory();

export default function(initialState = defaultState): Store {
  const composeEnhancers = !isServer && process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const routerReducer = connectRouter(history);
  const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history)));

  const rootReducer = combineReducers<defaultState>({
    router: routerReducer,
    asyncComponent: asyncComponentReducer,
    errorBoundary: errorBoundaryReducer,
    app: appReducer,
  });
  const store = createStore<defaultState, action, any, any>(rootReducer, initialState as defaultState, enhancer);

  if (module.hot) {
    module.hot.accept('~/App/reducer', () => {
      store.replaceReducer(appReducer)
    });
  }

  return store;
}
