import { defaultMemoize } from 'reselect';
import request from 'system/request';

let cache: string[];

export const getTranslates = async (limit = 15, offset = 0) => {
  try {
    if (!cache) {
      const res = await request(`/public/en.txt`);
      const text = await res.text();
      const words = text.split('\n').map(pair => pair.split(' ')[0]);
      cache = words;
    }
    
    const partOfWords = cache.slice(offset,  offset + limit);
    const translates = partOfWords.map(word => ({en: word, ru: ''}));
    
    return translates;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const getInfo = async () => {
  try {
    if(!cache) {
      const res = await request(`/public/en.txt`);
      const text = await res.text();
      const words = text.split('\n').map(pair => pair.split(' ')[0]);
  
      cache = words;
    }

    return { countWords: cache.length };
  } catch (e) {
    console.error(e);
    return { countWords: 0 }
  }
}