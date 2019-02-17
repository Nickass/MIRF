interface translatorState {
  words: Array<{en: string; ru: string;}>;
  countWords: number;
};

const translatorState: translatorState = {
  words: [
    {
      en: 'nothinga',
      ru: 'ничего'
    }
  ],
  countWords: 0,
};

export default translatorState;