import { getWords, receiveWords, failWords } from './actions';

export const fetchWords = async (dispatch: any) => {
  try {
    dispatch(getWords());

    const res = await fetch('en.txt');
    const text = await res.text();
    const words = text.split('\n').map(pair => pair.split(' ')[0]);
    const translates = words.map(word => ({en: word, ru: ''}));

    dispatch(receiveWords(translates));
  } catch (e) {
    dispatch(failWords(e))
  }
};