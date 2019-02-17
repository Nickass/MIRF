import { SETTINGS_REQUEST, SETTINGS_SUCCESS, SETTINGS_FAILURE } from './constants';

export const getSettings = () => {
  return {
    type: SETTINGS_REQUEST
  }
};

export const receiveSettings = (settings: any) => {
  return {
    type: SETTINGS_SUCCESS,
    payload: settings
  }
};

export const updateSettings = (payload: any) => {
  return {
    type: SETTINGS_SUCCESS,
    payload: payload
  }
};

export const failSettings = (err: any) => {
  return {
    type: SETTINGS_FAILURE,
    payload: err
  }
};
