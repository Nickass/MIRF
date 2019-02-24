// modules
import { Reducer } from 'redux';

// custom
import initalState from './state';
import { action } from 'store';
import {
  WORDS_REQUEST,
  WORDS_SUCCESS,
  WORDS_FAILURE,

  INFO_WORDS_REQUEST,
  INFO_WORDS_SUCCESS,
  INFO_WORDS_FAILURE
} from './constants';


type reducer = Reducer<initalState, action>;

const reducer: reducer = (state = initalState, action) => {
  switch(action.type) {
    case WORDS_REQUEST: {
      return { ...state, loading: true }
    }

    case WORDS_SUCCESS: {
      return { ...state, loading: false, words: action.payload}
    }

    case WORDS_FAILURE: {
      return { ...state, loading: false, error: action.payload }
    }


    case INFO_WORDS_REQUEST: {
      return { ...state, loading: true }
    }

    case INFO_WORDS_SUCCESS: {
      return { ...state, loading: false, countWords: action.payload.countWords}
    }

    case INFO_WORDS_FAILURE: {
      return { ...state, loading: false, error: action.payload }
    }
  }

  return state;
}

export default reducer;