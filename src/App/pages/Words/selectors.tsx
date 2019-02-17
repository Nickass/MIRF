import { createSelector } from 'reselect';

export const wordsSelector = (state: any) => state.words;

export const selectWords = createSelector(
  wordsSelector,
  words => words.words
);

export const selectCountWords = createSelector(
  wordsSelector,
  words => words.countWords
);