// modules
import { Reducer } from 'redux';

// custom
import { action as commmonAction } from '~/system/store';

export type state = {
  [propName: string]: {
    message: string;
    stack: string;
  };
};
export const state: state = {
};

export type action = commmonAction<{
  id: string;
  message?: string;
  stack?: string;
}>;

export type reducer = Reducer<state, action>;
export const reducer: reducer = (upcomingState = state, action) => {
  const newState = {...upcomingState};

  switch(action.type) {
    case 'UPSERT_ERROR_BUS': {
      const { id, message, stack } = action.payload;

      if (!message || !stack) throw new Error('Error UPSERT_ERROR_BUS');

      newState[id] = { message, stack };

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
