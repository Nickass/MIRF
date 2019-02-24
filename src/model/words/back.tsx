import * as fs from 'fs-extra';

export const getTranslates = async (limit = 15, offset = 0) => {
  try {
    const res = await fs.readFile(`./public/en.txt`);
    const text = await res.toString();
    const words = text.split('\n').map(pair => pair.split(' ')[0]);
    
    const partOfWords = words.slice(offset,  offset + limit);
    const translates = partOfWords.map(word => ({en: word, ru: ''}));
    
    return translates;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const getInfo = async () => {
  try {
    const res = await fs.readFile(`./public/en.txt`);
    const text = await res.toString();
    const words = text.split('\n').map(pair => pair.split(' ')[0]);

    return { countWords: words.length };
  } catch (e) {
    console.error(e);
    return { countWords: 0 }
  }
}