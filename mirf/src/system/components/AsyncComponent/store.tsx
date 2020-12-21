// modules
import { Reducer } from 'redux';

// custom
import { action } from '~/system/store';

export type state = {
  promises: {
    [propName: string]: Promise<React.ReactElement>;
  };
  errors: {
    [propName: string]: { message: string; stack?: string };
  };
  success: {
    [propName: string]: object;
  };
};
export const state: state = {
  promises: {},
  errors: {},
  success: {}
};

export type reducer = Reducer<state, action>;
export const reducer: reducer = (upcomingState = state, action) => {
  const newState = {...upcomingState};

  switch(action.type) {
    case 'UPSERT_ASYNC_COMPONENT_SUCCESS': {
      newState.success = { ...newState.success }
      const { id, data } = action.payload;
      newState.success[id] = data;

      break;
    }
    case 'UPSERT_ASYNC_COMPONENT_ERROR': {
      newState.errors = { ...newState.errors }
      const { id, error } = action.payload;
      newState.errors[id] = error;

      break;
    }
    case 'UPSERT_ASYNC_COMPONENT_PROMISE': {
      newState.promises = { ...newState.promises }
      const { id, promise } = action.payload;
      newState.promises[id] = promise;
      
      break;
    }
    case 'REMOVE_ASYNC_COMPONENT_PROMISE': {
      newState.promises = { ...newState.promises }
      const { id } = action.payload;
      delete newState.promises[id];

      break;
    }
    case 'REMOVE_ASYNC_DATA': {
      const { id } = action.payload;
      newState.promises = { ...newState.promises }
      newState.success = { ...newState.success }
      newState.errors = { ...newState.errors }

      delete newState.promises[id];
      delete newState.success[id];
      delete newState.errors[id];

      break;
    }
  }

  return newState;
}
