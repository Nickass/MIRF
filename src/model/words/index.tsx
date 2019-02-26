import { defaultMemoize } from 'reselect';
import request from 'system/request';


export const getTranslates = async (limit = 15, offset = 0) => {
  try {
    const res = await fetch('/words/getTranslates/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({limit, offset})
    });

    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const getInfo = async () => {
  try {
    const res = await fetch('/words/getInfo/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST"
    });

    return await res.json();
  } catch (e) {
    console.error(e);
    return { countWords: 0 }
  }
}