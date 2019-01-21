import { createSelector } from 'reselect';

export const settingsSelector = (state: any) => state.settings;

export const selectWordsPerPage = createSelector(
  settingsSelector,
  settings => settings.wordsPerPage
);