// modules
import { Reducer } from 'redux';

// custom
import { action } from 'store';
import initalState from './state';
import { APP_INITED, INFO_REQUEST, INFO_SUCCESS, INFO_FAILURE } from './constants';

type reducer = Reducer<typeof initalState, action>;

const reducer: reducer = (state = initalState, action) => {
  switch(action.type) {
    case APP_INITED: {
      return { ...state, inited: action.payload }
    }

    case INFO_REQUEST: {
      return { ...state, loading: true }
    }

    case INFO_SUCCESS: {
      return { ...state, ...action.payload, loading: false}
    }

    case INFO_FAILURE: {
      return { ...state, loading: false, error: action.payload }
    }
  }

  return state;
}

export default reducer;