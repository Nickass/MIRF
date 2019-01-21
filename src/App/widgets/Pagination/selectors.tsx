import { createSelector } from 'reselect';

export const wordsSelector = (state: any) => state.translator.words;

export const selectSomeWords = createSelector(
  wordsSelector,
  words => words.slice(0, 10)
);