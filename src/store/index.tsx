import { combineReducers, createStore } from 'redux';

import appState from 'App/state';
import appReducer from 'App/reducer';
import translatorState from 'App/widgets/Translator/state';
import translatorReducer from 'App/widgets/Translator/reducer';

export type action = { type: string; payload?: any; };

const initialState = {
  app: appState,
  translator: translatorState
};

const rootReducer = combineReducers<typeof initialState>({
  app: appReducer,
  translator: translatorReducer
});


export default function() {
  const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
  const store = createStore<typeof initialState, action, any, any>(rootReducer, initialState, middleware);

  if (module.hot) {
    module.hot.accept('App/reducer', () => {
      store.replaceReducer(appReducer)
    });

    module.hot.accept('App/widgets/Translator/reducer', () => {
      store.replaceReducer(translatorReducer)
    });
  }

  return store;
}
