import constant, { APP_INITED } from './constants';

export const initApp = () => {
  return {
    type: APP_INITED,
  }
};

type action = {
  type: constant,
  payload?: any
};

export default action;