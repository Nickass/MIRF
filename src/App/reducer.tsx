// modules
import { Reducer } from 'redux';

// custom
import { action } from 'store';
import initalState from './state';
import { APP_INITED } from './constants';

type reducer = Reducer<typeof initalState, action>;

const reducer: reducer = (state = initalState, action) => {
  switch(action.type) {
    case APP_INITED: {
      return { ...state, inited: action.payload }
    }
  }

  return state;
}

export default reducer;