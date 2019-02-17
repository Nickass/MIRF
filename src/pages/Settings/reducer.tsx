// modules
import { Reducer } from 'redux';

// custom
import initalState from './state';
import { action } from 'store';
import { SETTINGS_REQUEST, SETTINGS_UPDATE, SETTINGS_SUCCESS, SETTINGS_FAILURE } from './constants';

type reducer = Reducer<initalState, action>;

const reducer: reducer = (state = initalState, action) => {
  switch(action.type) {
    case SETTINGS_REQUEST: {
      return { ...state, loading: true }
    }

    case SETTINGS_SUCCESS: {
      return { ...state, loading: false, settings: action.payload}
    }

    case SETTINGS_UPDATE: {
      return { ...state, loading: true }
    }

    case SETTINGS_FAILURE: {
      return { ...state, loading: false, error: action.payload }
    }
  }

  return state;
}

export default reducer;