// modules
import { Reducer } from 'redux';

// custom
import initalState from './initialState';
import { APP_INITED } from './constants';
import action from './actions';

type reducer = Reducer<initalState, action>;

const reducer: reducer = (state = initalState, action) => {
  switch(action.type) {
    case APP_INITED: {
      return { ...state, inited: action.payload }
    }
  }

  return state;
}

export default reducer;