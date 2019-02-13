import { defaultMemoize } from 'reselect';

export const getInfo = async () => {
  const res = await fetch('/en.txt');
  const text = await res.text();
  const words = text.split('\n').map(pair => pair.split(' ')[0]);

  return {
    countWords: words.length
  };
}