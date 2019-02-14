import {
  WORDS_REQUEST,
  WORDS_SUCCESS,
  WORDS_FAILURE,

  INFO_WORDS_REQUEST,
  INFO_WORDS_SUCCESS,
  INFO_WORDS_FAILURE
} from './constants';

export const getWords = () => {
  return {
    type: WORDS_REQUEST
  }
};

export const receiveWords = (words: Array<{ en: string; ru: string; }>) => {
  return {
    type: WORDS_SUCCESS,
    payload: words
  }
};

export const failWords = (err: any) => {
  return {
    type: WORDS_FAILURE,
    payload: err
  }
};

export const getInfo = () => {
  return {
    type: INFO_WORDS_REQUEST
  }
};

export const receiveInfo = (info: { countWords: number; }) => {
  return {
    type: INFO_WORDS_SUCCESS,
    payload: info
  }
};

export const failInfo = (err: any) => {
  return {
    type: INFO_WORDS_FAILURE,
    payload: err
  }
};
