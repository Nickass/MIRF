import * as backend from 'model/words';
import { getWords, receiveWords, failWords } from './actions';

export const fetchWords = async (dispatch: any, limit: number, offset: number) => {
  try {
    dispatch(getWords());

    const translates = await backend.getTranslates(limit, offset);

    dispatch(receiveWords(translates));
  } catch (e) {
    dispatch(failWords(e))
  }
};