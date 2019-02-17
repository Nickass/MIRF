import { createSelector } from 'reselect';

export const wordsSelector = (state: any) => state.translator;

export const selectWords = createSelector(
  wordsSelector,
  translator => translator.words
);

export const selectCountWords = createSelector(
  wordsSelector,
  translator => translator.countWords
);