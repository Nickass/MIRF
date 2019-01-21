import { WORDS_REQUEST, WORDS_SUCCESS, WORDS_FAILURE } from './constants';

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
