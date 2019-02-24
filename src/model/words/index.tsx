import { defaultMemoize } from 'reselect';
let cache: string[];

export const getTranslates = async (limit = 15, offset = 0) => {
  if (!cache) {
    const res = await fetch('http://localhost:3000/static/en.txt');
    const text = await res.text();
    const words = text.split('\n').map(pair => pair.split(' ')[0]);
    cache = words;
  }
  
  const partOfWords = cache.slice(offset,  offset + limit);
  const translates = partOfWords.map(word => ({en: word, ru: ''}));
  
  return translates;
}

export const getInfo = async () => {
  if(!cache) {
    const res = await fetch('../static/en.txt');
    const text = await res.text();
    const words = text.split('\n').map(pair => pair.split(' ')[0]);

    cache = words;
  }
  
  return {
    countWords: cache.length
  };
}