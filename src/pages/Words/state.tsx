interface wordsState {
  words: Array<{en: string; ru: string;}>;
  countWords: number;
};

const wordsState: wordsState = {
  words: [],
  countWords: 0,
};

export default wordsState;