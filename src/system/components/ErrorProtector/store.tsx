// modules
import { Reducer } from 'redux';

// custom
import { action } from '~/system/store';

export type state = {
  [propName: string]: any;
};
export const state: state = {
};

export type reducer = Reducer<state, action>;
export const reducer: reducer = (upcomingState = state, action) => {
  const newState = {...upcomingState};

  switch(action.type) {
    case 'UPSERT_ERROR_BUS': {
      const { id, message, stack } = action.payload;
      newState[id] = { message, stack }

      break;
    }
    case 'REMOVE_ERROR_BUS': {
      const { id } = action.payload;
      delete newState[id];
      
      break;
    }
  }

  return newState;
}
