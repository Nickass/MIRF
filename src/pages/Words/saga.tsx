import * as backend from 'model/words';

import {
  getWords,
  receiveWords,
  failWords,
  getInfo,
  receiveInfo,
  failInfo
} from './actions';

export const fetchWords = async (dispatch: any, limit: number, offset: number) => {
  try {
    dispatch(getWords());

    const translates = await backend.getTranslates(limit, offset);

    dispatch(receiveWords(translates));
  } catch (e) {
    dispatch(failWords(e))
  }
};

export const fetchInfo = async (dispatch: any) => {
  try {
    dispatch(getInfo());

    const data: {
      countWords: number;
    } = await backend.getInfo();

    dispatch(receiveInfo(data));
  } catch (e) {
    dispatch(failInfo(e))
  }
};