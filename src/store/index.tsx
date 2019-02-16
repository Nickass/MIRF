import { combineReducers, createStore, applyMiddleware, compose, Reducer } from 'redux';
import { createBrowserHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import appState from 'App/state';
import appReducer from 'App/reducer';
import settingsState from 'App/pages/Settings/state';
import settingsReducer from 'App/pages/Settings/reducer';
import translatorState from 'App/pages/Translator/state';
import translatorReducer from 'App/pages/Translator/reducer';

export type action = { type: string; payload?: any; };

const initialState = {
  router: {},
  app: appState,
  settings: settingsState,
  translator: translatorState
};

const reducers: any = {
  app: appReducer,
  settings: settingsReducer,
  translator: translatorReducer
};

let history: any;

if (typeof document !== 'undefined') {
  history = createBrowserHistory();
  reducers.router = connectRouter(history) as any; // TODO typing the function
}

const rootReducer = combineReducers<typeof initialState>(reducers);
const composeEnhancers = typeof window !== 'undefined'
 ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default function(passedState: any = initialState) {
  let enhancer: any;

  if (typeof document !== 'undefined') {
    enhancer = composeEnhancers(
      applyMiddleware(routerMiddleware(history))
    );
  }

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

  return store;
}
