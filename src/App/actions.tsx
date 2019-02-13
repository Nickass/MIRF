import { APP_INITED, INFO_REQUEST, INFO_SUCCESS, INFO_FAILURE } from './constants';

export const initApp = () => {
  return {
    type: APP_INITED,
  }
};

export const getInfo = () => {
  return {
    type: INFO_REQUEST
  }
};

export const receiveInfo = (data: any) => {
  return {
    type: INFO_SUCCESS,
    payload: data
  }
};

export const failInfo = (err: any) => {
  return {
    type: INFO_FAILURE,
    payload: err
  }
};
