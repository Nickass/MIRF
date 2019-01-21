import { defaultMemoize } from 'reselect';

export const getTranslates = async (limit = 15, offset = 0) => {
  const res = await fetch('en.txt');
  const text = await res.text();
  const words = text.split('\n').map(pair => pair.split(' ')[0]);
  const partOfWords = words.slice(offset,  offset + limit);
  const translates = partOfWords.map(word => ({en: word, ru: ''}));

  return translates;
}