import { createStore } from 'redux';
import rootReduser from 'redusers';

export default (initialState={}) => {
  return createStore(rootReduser, initialState);
};