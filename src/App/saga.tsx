import * as backend from 'model/info';
import { getInfo, receiveInfo, failInfo } from './actions';

export const fetchInfo = async (dispatch: any) => {
  try {
    dispatch(getInfo());

    const data: {
      countWords: number;
    } = await backend.getInfo();

    dispatch(receiveInfo(data));
  } catch (e) {
    dispatch(failInfo(e))
  }
};