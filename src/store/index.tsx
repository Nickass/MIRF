import { combineReducers, createStore, applyMiddleware, compose, Reducer, Store } from 'redux';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';

import { reducer as asyncComponentReducer, state as asyncComponentState } from '~/components/AsyncComponent/store';
import { reducer as errorProtectorReducer, state as errorProtectorState } from '~/components/ErrorProtector/store';

export type action<T = any> = { type: string; payload: T; };
export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export interface defaultState {
  router: RouterState; // Do not use router in initial state
  asyncComponent: asyncComponentState,
  error_protector: errorProtectorState,
}
export const defaultState = {
  asyncComponent: asyncComponentState,
  error_protector: errorProtectorState,
};
export const history = isServer ? createMemoryHistory() : createBrowserHistory();

export default function store(initialState = defaultState): Store {
  const composeEnhancers = !isServer && process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  const routerReducer = connectRouter(history);
  const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history)));

  const rootReducer = combineReducers<defaultState>({
    router: routerReducer,
    asyncComponent: asyncComponentReducer,
    error_protector: errorProtectorReducer,
  });
  const store = createStore<defaultState, action, any, any>(rootReducer, initialState as defaultState, enhancer);

  return store;
}
