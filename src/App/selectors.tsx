import { createSelector } from 'reselect';

export const infoSelector = (state: any) => state.app;

export const selectInfo = createSelector(
  infoSelector,
  info => info
);

export const selectCountWords = createSelector(
  infoSelector,
  info => info.countWords
);